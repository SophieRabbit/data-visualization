const path = require('path');
// html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css分离
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputDirectory = 'dist';

module.exports = {
    entry: ['babel-polyfill', './src/client/index.js'],
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对位置
        path: path.join(__dirname, outputDirectory),//输出文件的绝对路径
        filename: 'bundle.js'//用于输出文件的文件名
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, //通过正则表达式解析所有JS文件
            exclude: /(node_modules)/, //会跳过mode_modules的文件
            use: {
                loader: 'babel-loader'//用babel-loader来解释
            },
            query: {
                presets: ['react', 'es2015'], //加载react和es2015的包
                plugins: ['react-html-attrs'] //添加组件的插件配置
            }
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    // server 服务
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            // 标题
            title: '',
            // 模板
            template: './public/index.html',
            favicon: './public/favicon.ico',
            // 压缩 去掉所有空格
            minify: {
                collapseWhitespace: true //false | true
            },
            // 添加hash
            hash: true
        })
    ]
};