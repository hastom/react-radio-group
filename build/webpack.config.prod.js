const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');
const { resolve } = require('path');

module.exports = merge(commonConfig, {
	mode: 'production',
	entry: resolve('./src/index.js'),
	output: {
		filename: 'index.js',
		library: 'RadioGroup',
		libraryTarget: 'commonjs2',
	},
	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react',
			},
		},
	],
	plugins: [
		new CleanWebpackPlugin([resolve('./dist')], {
			root: resolve('.'),
		}),
	],
});
