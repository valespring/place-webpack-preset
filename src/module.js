const utils = require('./utils');
const webpackPlugins = require('./plugins').plugins;
const rootPath = utils.path.resolve(__dirname, '../');

exports.default = {
	rules: [
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				webpackPlugins.MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'postcss-loader',
					options: { plugins: () => [utils.autoprefixer()] }
				},
				{
					loader: 'sass-loader',
					options: {
						implementation: require('sass'),
						sassOptions: {
							includePaths: [
								utils.path.join(
									rootPath,
									'node_modules/place-framework/scss/'
								)
							]
						}
					}
				}
			]
		}
	]
};
