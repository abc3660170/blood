/**
 * Created by 毛俊杰 on 2016/11/11 0011.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }

        ]
    },
    devServer: {
        historyApiFallback: false,
        //publicPath:'/dist1/',
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}