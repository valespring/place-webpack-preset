const UTILITIES = require('./src/utilities');
const WEBPACK_BASE_PRESET = require('./src/webpack');
const { merge } = UTILITIES.merge;

class PlaceWebpackPreset {
	constructor(options) {
		this.webpackBasePreset = WEBPACK_BASE_PRESET(options);

		// Merge default with user config
		this.userOptions = PlaceWebpackPreset.mergeConfig(options);

		const mergedConfig = merge(
			this.webpackBasePreset,
			this.userOptions.config
		);

		// Return config
		return mergedConfig;
	}

	static mergeConfig(options) {
		const settings = {
			config: {
			}
		};

		const userSettings = options;

		for (const attr in userSettings) {
			settings[attr] = userSettings[attr];
		}

		return settings;
	}
}

module.exports = PlaceWebpackPreset;
