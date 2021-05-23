require('ignore-styles');
require('url-loader');
require('file-loader');
require('regenerator-runtime/runtime');
require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ['@babel/preset-env', ["@babel/preset-react", {
        "runtime": "automatic"
    }]],
    plugins: [
    ]
});
require('./ssr');