const UTILITIES = require('../utilities');

module.exports = (options) => {
	const baseOptions = {
		configType: 'flat',
		overrideConfigFile: UTILITIES.path.resolve(
			process.cwd(),
			'eslint.config.js'
		),
		eslintPath: 'eslint/use-at-your-own-risk'
	};

	const envOptions = options && options.env ? {
		extensions:  options.env.ESLINT_EXTENSIONS ? options.env.ESLINT_EXTENSIONS.split(',') : 'js',
		fix: (options.env.fix || options.env.ESLINT_FIX) || false
	} : {};

	return {
		lib: require('eslint-webpack-plugin'),
		options: { ...baseOptions, ...envOptions }
	};
};
