const webpack = require('webpack');
const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
    // we are extending the base alias config here, adding preact as an alias
    defaultConfig.resolve.alias = {
        ...defaultConfig.resolve.alias,
        react: 'preact-compat',
        'react-dom': 'preact-compat'
    };

    defaultConfig.resolve.extensions.push('.ts', '.tsx');

    // adding new plugins to the default config.
    defaultConfig.plugins.push(
        new webpack.ProvidePlugin({
            Component: ['preact', 'Component'],
            React: ['preact-compat']
        })
    );

    // Make sure we also test for typescript files
    defaultConfig.module.rules[0].test = /\.(js|ts)x?$/;

    defaultConfig.module.rules[0].use.push({
        loader: 'linaria/loader',
        options: {
            sourceMap: true
        }
    });
    return defaultConfig;
};
