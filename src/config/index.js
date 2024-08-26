const CONFIG_DEFAULT = require('../../config.default');

module.exports = (options) => {
	return {
		OUTPUT: {
			PATH: options.output.path || CONFIG_DEFAULT.OUTPUT.PATH,
			CSS: options.output.css || CONFIG_DEFAULT.OUTPUT.CSS,
			JS: options.output.js || CONFIG_DEFAULT.OUTPUT.JS
		}
	};
};
