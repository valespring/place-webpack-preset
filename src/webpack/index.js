const path = require('path');

module.exports = (options) => {
	const CONFIG = require('../config')(options);
	
	let webpackPreset = {
	};

	['entry', 'module', 'output', 'plugins'].forEach((cat) => {
		webpackPreset[cat] = require(`./${cat}/index.js`)(options);
	});

	// Determine the framework path for aliases
	const frameworkPath = path.resolve(
		process.cwd(),
		CONFIG.FRAMEWORK_WORKSPACE_PATH || CONFIG.FRAMEWORK_BASE_PATH
	);

	console.log('=== WEBPACK ALIAS DEBUG ===');
	console.log('CONFIG.SCSS_ALIAS:', CONFIG.SCSS_ALIAS);
	console.log('CONFIG.FRAMEWORK_WORKSPACE_PATH:', CONFIG.FRAMEWORK_WORKSPACE_PATH);
	console.log('CONFIG.FRAMEWORK_BASE_PATH:', CONFIG.FRAMEWORK_BASE_PATH);
	console.log('process.cwd():', process.cwd());
	console.log('frameworkPath:', frameworkPath);
	console.log('alias config:', { [CONFIG.SCSS_ALIAS]: frameworkPath });
	console.log('=== END DEBUG ===');

	webpackPreset.resolve = {
		modules: [
			path.resolve(__dirname, '../../../node_modules'), // Monorepo root node_modules
			'node_modules', // Current project's node_modules
		],
		alias: {
			[CONFIG.SCSS_ALIAS]: frameworkPath
		}
	};

	return webpackPreset;
};
