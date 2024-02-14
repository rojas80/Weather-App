// webpack.config.js
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/loadApp.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist'),
        },
        port:3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
    ,
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            }

        ],
    },
    resolve: {
        fallback: {
          "crypto": require.resolve("crypto-browserify"),
          "buffer": require.resolve("buffer/"),
          "path": require.resolve("path-browserify"),
          "stream": false,
        }
      },      
   
};