module.exports = (options) => {
	let webpackPreset = {
	};

	['entry', 'module', 'output', 'plugins'].forEach((cat) => {
		webpackPreset[cat] = require(`./${cat}/index.js`)(options);
	});

	return webpackPreset;
};
