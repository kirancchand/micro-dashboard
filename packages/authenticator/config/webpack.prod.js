const {merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packageJson=require('../package.json');
const commonConfig=require('./webpack.common');

const prodConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/authenticator/latest/',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'authenticator',
            filename:'remoteEntry.js',
            exposes:{
                './AuthenticatorApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
};

module.exports=merge(commonConfig,prodConfig);