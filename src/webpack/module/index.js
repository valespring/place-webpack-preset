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
						options: { publicPath: '' }
					},
					{
						loader: 'css-loader',
						options: { esModule: false }
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['autoprefixer']
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
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
