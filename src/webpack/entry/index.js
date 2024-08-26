const UTILITIES = require('../../utilities');

module.exports = (options) => {
	return {
		main: UTILITIES.path.resolve(process.cwd(), './src/main.js')
	};
};
