const presets = ['@babel/typescript', '@babel/preset-env', '@babel/preset-react', 'linaria/babel'];
const plugins = [
    [
        'module-resolver',
        {
            root: ['src'],
            alias: {
                react: 'preact-compat',
                'react-dom': 'preact-compat',
                'create-react-class': 'preact-compat/lib/create-react-class',
                'react-dom-factories': 'preact-compat/lib/react-dom-factories'
            }
        }
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-object-rest-spread'
];

module.exports = {
    presets,
    plugins
};
