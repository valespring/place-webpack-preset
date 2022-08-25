module.exports = {
	rules: [
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'postcss-loader',
					options: { plugins: () => [autoprefixer()] }
				},
				{
					loader: 'sass-loader',
					options: {
						implementation: require('sass'),
						sassOptions: {
							// eslint-disable-next-line
							includePaths: [
								path.resolve(
									__dirname,
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
