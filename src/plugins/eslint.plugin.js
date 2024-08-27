const UTILITIES = require('../utilities');

module.exports = (options) => {
	return {
		lib: require('eslint-webpack-plugin'),
		options: {
			configType: 'flat',
			overrideConfigFile: UTILITIES.path.resolve(
				process.cwd(),
				'eslint.config.js'
			),
			eslintPath: 'eslint/use-at-your-own-risk',
			fix: options && options.env.fix === 'true'
		}
	};
};
