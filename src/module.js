const utils = require('./utils');
const webpackPlugins = require('./plugins').plugins;

exports.default = {
	rules: [
		{
			test: /\.s?css$/,
			use: [
				{
					loader: webpackPlugins.MiniCssExtractPlugin.loader,
					options: {
						publicPath: ''
					}
				},
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
									process.cwd(),
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
