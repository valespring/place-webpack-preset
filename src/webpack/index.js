const path = require('path');

// Common extensions used by both Vue and React
const COMMON_EXTENSIONS = [
	'.*',
	'.js',
	'.jsx',
	'.ts',
	'.tsx',
	'.vue',
	'.json',
	'.scss'
];

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

	// Common stats configuration
	webpackPreset.stats = {
		loggingDebug: ['sass-loader']
	};

	// Common resolve configuration
	webpackPreset.resolve = {
		modules: [
			path.resolve(__dirname, '../../../node_modules'), // Monorepo root node_modules
			'node_modules', // Current project's node_modules
		],
		alias: {
			[CONFIG.SCSS_ALIAS]: frameworkPath
		},
		// Common extensions used by both Vue and React
		extensions: COMMON_EXTENSIONS
	};

	// Common optimization configuration
	webpackPreset.optimization = {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -10,
					chunks: 'all'
				}
			}
		}
	};

	return webpackPreset;
};
