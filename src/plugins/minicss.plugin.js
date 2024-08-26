module.exports = (options) => {
	const CONFIG = require('../config')(options);

	return {
		lib: require('mini-css-extract-plugin'),
		options: {
			filename: CONFIG.OUTPUT.CSS,
			chunkFilename: CONFIG.OUTPUT.CSS
		}
	};
};
