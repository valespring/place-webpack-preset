// Base Config
const CODE_CONFIG_PATH = require('./config.format').CODE_CONFIG_PATH;
const ESLINT_CONFIG = require(`${CODE_CONFIG_PATH}`).ESLINT_CONFIG;

// Define another config if desired
module.exports = [
	{
		files: ['**/*.js'],
		plugins: {
			...ESLINT_CONFIG.plugins.stylistic
		},
		rules: {
			...ESLINT_CONFIG.configs.base.rules,
			...ESLINT_CONFIG.configs.stylistic.rules
		},
		languageOptions: {
			parser: require('@babel/eslint-parser'),
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: ['@babel/preset-env']
				}
			}
		}
	}
];
