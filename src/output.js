const utils = require('./utils');

exports.default = {
	filename: '[name].[contenthash:8].js',
	path: utils.path.resolve(process.cwd(), 'dist'),
	chunkFilename: '[name].[contenthash:8].js'
};
