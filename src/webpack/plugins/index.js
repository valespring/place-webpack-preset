module.exports = (options) => {
	const PLUGINS = require('../../plugins')(options);

	return Object.keys(PLUGINS).map(pluginKey => {
		const pluginInstance = PLUGINS[pluginKey];

		return new pluginInstance.lib(pluginInstance.options || {});
	});
};
