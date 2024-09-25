const {merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packageJson=require('../package.json');
const commonConfig=require('./webpack.common');

const prodConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/dynamicdashboard/latest/',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'dynamicdashboard',
            filename:'remoteEntry.js',
            exposes:{
                './DynamicDashboardApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
};

module.exports=merge(commonConfig,prodConfig);