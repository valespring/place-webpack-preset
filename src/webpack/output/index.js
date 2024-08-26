const UTILITIES = require('../../utilities');

module.exports = (options) => {
	const MERGED_CONFIG_WITH_OPTIONS = require('../../config')(options);

	return {
		filename: MERGED_CONFIG_WITH_OPTIONS.OUTPUT.JS,
		path: UTILITIES.path.resolve(
			process.cwd(),
			MERGED_CONFIG_WITH_OPTIONS.OUTPUT.PATH
		),
		chunkFilename: MERGED_CONFIG_WITH_OPTIONS.OUTPUT.JS
	};
};
