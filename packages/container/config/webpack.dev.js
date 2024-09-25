const {merge}=require('webpack-merge');
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJson=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:3080/',
    },
    devServer:{
        port:3080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                menu:'menu@http://localhost:3085/remoteEntry.js',
                marketing:'marketing@http://localhost:3081/remoteEntry.js',
                auth:'auth@http://localhost:3082/remoteEntry.js',
                dashboard:'dashboard@http://localhost:3083/remoteEntry.js',
                authenticator:'authenticator@http://localhost:3086/remoteEntry.js',
                utils:'utils@http://localhost:3087/remoteEntry.js',
                dynamicdashboard:'dynamicdashboard@http://localhost:3088/remoteEntry.js',
            },
            shared:packageJson.dependencies
            // ['react','react-dom'],
        }),
    ]
};

module.exports=merge(commonConfig,devConfig);