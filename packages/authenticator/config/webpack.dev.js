const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJson=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:3086/',
    },
    devServer:{
        port:3086,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'authenticator',
            filename:'remoteEntry.js',
            exposes:{
                './AuthenticatorApp':'./src/bootstrap'
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