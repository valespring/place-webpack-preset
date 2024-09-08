module.exports = (options) => {
	const CONFIG = require('../../config')(options);
	const PLUGINS = require('../../plugins')(options);
	const UTILITIES = require('../../utilities');

	return {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: PLUGINS.MiniCssExtractPlugin.lib.loader,
						options: PLUGINS.MiniCssExtractPlugin.lib.options
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: ['autoprefixer']
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sourceMap: true,
							sassOptions: {
								loadPaths: [
									UTILITIES.path.resolve(
										process.cwd(),
										CONFIG.FRAMEWORK_BASE_PATH
									)
								]
							}
						}
					}
				]
			}
		]
	};
};
