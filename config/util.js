const isProd = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const conf = require('../webpack.config.js');
exports.cssLoaders = function(options) {
    options = options || {};
    var cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            minimize: true
        }
    }
    var postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: true,
            plugins: (loader) => [
                require('autoprefixer')()
            ]
        }
    }

    var px2remLoader = {
        loader: 'px2rem-loader',
        options: {
            remUnit: 16 //设计稿宽度/10
        }
    };

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = [cssLoader, postcssLoader];
        if (conf.rem) {
            loaders.push(px2remLoader);
        }
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (!isProd) {
            return ['vue-style-loader'].concat(loaders)
        } else {
            return ExtractTextPlugin.extract({
                use: loaders,
                // publicPath: '../',
                fallback: 'vue-style-loader'
            })
        }


        //		}
        /*
         * for webpack 4.16 we don't use extracttextplugin any more
         * we use minicssextractplugin
         */

    }
    const stylusOptions = {
            'resolve url': true
        }
        // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {
            indentedSyntax: true
        }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus', stylusOptions),
        styl: generateLoaders('stylus', stylusOptions)
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    const output = []
    const loaders = exports.cssLoaders(options)

    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }

    return output
}