![Place Framework Header](https://raw.githubusercontent.com/valespring/place-framework/master/docs/logo-header.gif?sanitize=true)


<p align="center">
<a href="https://www.npmjs.com/package/place-framework" target="_blank">
    <img src="https://img.shields.io/npm/v/@place-framework/place-webpack-preset?style=flat-square">
</a>
</p>



PLACE Webpack Preset
====

![Place Framework Ecosystem Diagram](https://raw.githubusercontent.com/valespring/place-framework/master/docs/ecosystem-diagram.jpg?sanitize=true)

## Introduction

The premise of this preset is to have a solid jumpoff point with the PLACE framework. It comes with the framework included through proper loaders built in for compilation.

## Implementation

The PLACE Webpack Preset is constructed as a JS class, with options for merging and layering your own config through the `config` key. For example:

```
module.exports = (env) => {
	return new PlaceWebpackPreset({
		config: require('./webpack.your.config'),
		env
	});
};
```