const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJson=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:3088/',
    },
    devServer:{
        port:3088,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'dynamicdashboard',
            filename:'remoteEntry.js',
            exposes:{
                './DynamicDashboardApp':'./src/bootstrap',
                // './notificationReducer':'./re-redux/reducer',
                // './Headr':'./src/components/Headr'
                // './CounterReducer':'./re-redux/counterReducer'
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