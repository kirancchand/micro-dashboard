const {merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packageJson=require('../package.json');
const commonConfig=require('./webpack.common');

const prodConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/landing/latest/',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'landing',
            filename:'remoteEntry.js',
            exposes:{
                './LandingApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
};

module.exports=merge(commonConfig,prodConfig);