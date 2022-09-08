// Pass options to return the mode
module.exports = (options) => {
	return {
		development: options.mode === 'development',
		production: options.mode === 'production'
	};
};
