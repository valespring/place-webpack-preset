'use strict';

// Merge
const { merge } = require('webpack-merge');

// Array fs loop
const subsets = ['_utils', '_module', '_output', '_plugins'];

// Declare from each file
subsets.forEach((subset) => {
	exports[subset] = require(`./${subset}`);
});
