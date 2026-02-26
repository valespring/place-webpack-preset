module.exports = (options) => {
	const CONFIG = require('../../config')(options);
	const PLUGINS = require('../../plugins')(options);
	const UTILITIES = require('../../utilities');

	// Common SCSS loader configuration (only the parts that are actually shared)
	const SASS_LOADER_OPTIONS = {
		implementation: require('sass'),
		sourceMap: true,
		sassOptions: {
			loadPaths: [
				// Try workspace path first (for development)
				UTILITIES.path.resolve(
					process.cwd(),
					CONFIG.FRAMEWORK_WORKSPACE_PATH || CONFIG.FRAMEWORK_BASE_PATH
				),
				// Fallback to production path
				UTILITIES.path.resolve(
					process.cwd(),
					CONFIG.FRAMEWORK_BASE_PATH
				),
				UTILITIES.path.resolve(
					process.cwd(),
					'node_modules'
				)
			]
		}
	};

	return {
		rules: [
			// CSS loader (common to both Vue and React)
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			// Font assets (common to both Vue and React)
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			},
			// Image and media assets (common to both Vue and React)
			{
				test: /\.(png|jpe?g|gif|webm|mp4|mov|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: CONFIG.OUTPUT_PATH || 'assets',
					esModule: false
				}
			},
			// Rule for SCSS files imported into JavaScript (for :export syntax)
			{
				test: /\.scss$/,
				resourceQuery: /^\?js$/,
				type: 'javascript/auto',
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'icss'
							},
							importLoaders: 1
						}
					},
					{
						loader: 'sass-loader',
						options: SASS_LOADER_OPTIONS
					}
				]
			},
			// Standard rule for SCSS/CSS files (exclude files with ?js query)
			{
				test: /\.s?css$/,
				resourceQuery: { not: [/js/] },
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
						options: SASS_LOADER_OPTIONS
					}
				]
			}
		]
	};
};
