const UTILITIES = require('../utilities');

module.exports = (options) => {
	return {
		lib: require('eslint-webpack-plugin'),
		options: {
			overrideConfigFile: UTILITIES.path.resolve(
				process.cwd(),
				'eslint.config.js'
			),
			eslintPath: 'eslint/use-at-your-own-risk',
			configType: 'flat',
			fix: options && options.fix ? options.fix : false
		}
	};
};
