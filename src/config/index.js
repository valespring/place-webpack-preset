const CONFIG_DEFAULT = require('../../config.default');

module.exports = (options) => {
	return {
		FRAMEWORK_BASE_PATH: CONFIG_DEFAULT.FRAMEWORK_BASE_PATH,
		FRAMEWORK_WORKSPACE_PATH: CONFIG_DEFAULT.FRAMEWORK_WORKSPACE_PATH,
		SCSS_ALIAS: CONFIG_DEFAULT.SCSS_ALIAS,
		OUTPUT: {
			PATH: options.output.path || CONFIG_DEFAULT.OUTPUT.PATH,
			CSS: options.output.css || CONFIG_DEFAULT.OUTPUT.CSS,
			JS: options.output.js || CONFIG_DEFAULT.OUTPUT.JS
		}
	};
};
