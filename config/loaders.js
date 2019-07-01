const isProd = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./util.js');
module.exports = [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: utils.cssLoaders({
                sourceMap: true,
                extract: !isProd,
                usePostCSS: false
            }),
            cssSourceMap: true,
            cacheBusting: true,
            transformToRequire: {
                video: ['src', 'poster'],
                source: 'src',
                img: 'src',
                image: 'xlink:href'
            },
            cssModules: {
                localIdentName: '[path][name]---[local]---[hash:base64:5]',
                camelCase: true
            }
        }
    },
    {
        test: /\.html|.tpl|.md$/,
        use: {
            'loader': "jcy-loader"
        }
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
                plugins: [
                    "transform-object-rest-spread",
                    'syntax-dynamic-import',
                    'transform-async-to-generator',
                    'transform-regenerator',
                    'transform-runtime'
                ],
                "compact": false
            }
        }]
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 1000,
            // outputPath: "./fonts",
            // publicPath: "../fonts",
            name: "fonts/[name].[hash:6].[ext]"
        }
    },
    {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 1000,
            name: "voice/[name].[hash:6].[ext]"
        }
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: 'image/[name].[hash:6].[ext]'
        }
    }
    // {
    //     test: /\.(styl|stylus)$/,
    //     use: isProd ?
    //         ExtractTextPlugin.extract({
    //             use: [{
    //                     loader: 'css-loader',
    //                     options: {
    //                         minimize: true
    //                     }
    //                 },
    //                 'stylus-loader'
    //             ],
    //             fallback: 'vue-style-loader'
    //         }) : ['vue-style-loader', 'css-loader', 'stylus-loader']
    // },
    // {
    //     test: /\.css$/,
    //     loader: 'css-loader'
    // },
    // {
    //     test: /\.less$/,
    //     use: isProd ?
    //         ExtractTextPlugin.extract({
    //             use: [{
    //                     loader: 'css-loader',
    //                     options: {
    //                         minimize: true
    //                     }
    //                 },
    //                 'less-loader'
    //             ],
    //             fallback: 'vue-style-loader'
    //         }) : ['vue-style-loader', 'css-loader', 'less-loader']
    // }
].concat(utils.styleLoaders({
    sourceMap: true,
    extract: true,
    usePostCSS: true
}))