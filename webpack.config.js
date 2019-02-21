const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      'error-handler': './app/error-handler.js',
      'app': './app/ui.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'vnc.html'), // 模板
            filename: path.join(__dirname, 'dist/vnc.html'),
            hash: true, // 防止缓存
        }),
      
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'app/images'),
            to: path.resolve(__dirname, 'dist/images'),
          },{
            from: path.resolve(__dirname, 'app/locale'),
            to: path.resolve(__dirname, 'dist/locale'),
          },{
            from: path.resolve(__dirname, 'app/sounds'),
            to: path.resolve(__dirname, 'dist/sounds'),
          },{
            from: path.resolve(__dirname, 'app/styles'),
            to: path.resolve(__dirname, 'dist/styles'),
          }]),
      
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
        }]
    }
};