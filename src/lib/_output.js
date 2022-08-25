module.exports = (imports) => {
	return {
		output: {
			filename: '[name].[contenthash:8].js',
			path: path.resolve(__dirname, 'dist'),
			chunkFilename: '[name].[contenthash:8].js'
		}
	};
};
