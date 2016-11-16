/**
 * Created by 毛俊杰 on 2016/11/11 0011.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./src/main.js',
    //entry:['webpack/hot/dev-server', path.resolve(__dirname, './src/main.js')],
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    resolveLoader: {
        //extensions: [".vue-loader.js",".file-loader.js", ".style-loader.js", ".loader.js", ".js"]
       root: path.join(__dirname, 'node_modules')
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
            },
            ,
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }

        ]
    },
    devServer: {
        historyApiFallback: true,
        //publicPath:'/dist1/',
        noInfo: true
        // hot:true,
        // inline:true
    },
    devtool: '#eval-source-map'
    //插件项
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin()
    // ]
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