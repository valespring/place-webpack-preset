const ENV_CONFIG = require('dotenv').config({
	path: require('path').resolve(
		process.cwd(), '.env')
}).parsed;

module.exports = ENV_CONFIG;
