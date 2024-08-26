module.exports = (options) => {
	return {
		ESLintWebpackPlugin: require('./eslint.plugin')(options),
		MiniCssExtractPlugin: require('./minicss.plugin')(options)
	};
};
