/*
 * author  :chenjian
 * endtime :2018-9-6
 * function: this module will make your project run at development
 */
const DEV_MID = require('webpack-dev-middleware');
const HOT_MID = require("webpack-hot-middleware");
const express = require('express');
const webpack = require('webpack');
const merge = require('webpack-merge');
const portIsOccupied = require('./portIsOccupied');
const path = require('path');
const opn = require('opn');
const ora = require('ora');
const compiler = require('./compiler.js');
const proxy = require('http-proxy-middleware')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
/*
 * when you have to create a server to run a project
 * you can new developBase to make a service
 * and you have to hand it a path to make it know where the project in;
 */
class developBase {
    constructor(src) {
        var spinner = ora('start make a development envirenment...')
        spinner.start();
        this.conf = require('../webpack.config.js') || {};
        this.app = express();
        this.app.use('/favicon.ico', express.static(path.resolve(__dirname, './source/favicon.ico')))
        this.merge(src);
        this.entryConcat();
        this.compiler = webpack(this.base);
        this.useMiddleware();
        this.makeStatic(src);
        var port = this.conf.port;
        portIsOccupied(port, (err, p) => {
            port = p;
            this.app.listen(p);
        })

        this.devMiddleware.waitUntilValid(() => {
            spinner.stop()
            console.log('> Listening at localhost:' + port)
            if (this.conf.auto_open_browser) {
                opn('http://localhost:' + port, {
                    app: ['chrome']
                })
            }
        })
    }
    merge(src) {
        var base = compiler(src);
        this.base = merge(base, {
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new FriendlyErrorsPlugin()
            ]
        })
    }
    entryConcat() {
        var entry = this.base.entry;
        for (var key in entry) {
            entry[key].unshift('./config/development.client.js')
        }
    }
    makeStatic(src) {
            if (this.conf.static) {
                this.app.use(
                    '/static',
                    express.static(path.resolve(__dirname, '../static'))
                )
            }
        }
        /*
         * devMiddleware can make your project run in browser
         * hotMiddleware can make your project update by save it
         */
    useMiddleware() {
        this.devMiddleware = DEV_MID(this.compiler, {
            publicPath: "/",
            logLevel: 'silent', //set silent will hide log
            quiet: true
        })
        this.hotMiddleware = HOT_MID(this.compiler, {
            log() {},
            path: "/__webpack_hmr"
        })
        this.app.use(this.devMiddleware)
        this.app.use(this.hotMiddleware);
        this.conf.proxy && this.useProxy();
    }
    useProxy() {
        var conf = this.conf;
        conf.proxy.forEach(item => {
            if (typeof(item) == 'string') {
                this.app.use(proxy({
                    target: item,
                    changeOrigin: true
                }))
            } else {
                this.app.use(proxy(item.api, {
                    target: item.target,
                    changeOrigin: true
                }))
            }
        });
    }
}
module.exports = developBase;