const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJson=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:3087/',
    },
    devServer:{
        port:3087,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'utils',
            filename:'remoteEntry.js',
            exposes:{
                './UtilsApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
            // ['react','react-dom'],
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};

module.exports=merge(commonConfig,devConfig);