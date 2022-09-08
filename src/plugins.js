const packageInfo = require('../package.json');

const prettierConfig = require(packageInfo.config.prettier.path).default;
const prettierPluginConfig =
	require(packageInfo.config.prettier.path).scss;
const plugins = {
	MiniCssExtractPlugin: require('mini-css-extract-plugin'),
	HtmlWebpackHarddiskPlugin: require('html-webpack-harddisk-plugin'),
	HtmlWebpackPlugin: require('html-webpack-plugin'),
	CleanWebpackPlugin: require('clean-webpack-plugin'),
	PrettierPlugin: require('prettier-webpack-plugin')
};

exports.plugins = plugins;
exports.default = [
	new plugins.PrettierPlugin(prettierPluginConfig),
	new plugins.MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[name].css'
	})
];
