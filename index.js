const { merge } = require('webpack-merge');

class PlaceWebpackPreset {
  constructor(options) {
    this.webpackPreset = {};
    this.subsets = ['module', 'output', 'plugins'];

    this.subsets.forEach(subset => {
      this.webpackPreset[subset] = require(`./src/${subset}`).default;
    });
    // Merge default with layers
    this.config = PlaceWebpackPreset.mergeConfig(options);

    // Return config
    return merge(this.webpackPreset, this.config.layer);
  }

  static mergeConfig(options) {
    const settings = {
      layer: {}
    };

    const userSettings = options;

    for (const attr in userSettings) {
      settings[attr] = userSettings[attr];
    }

    return settings;
  }
}

module.exports = PlaceWebpackPreset;