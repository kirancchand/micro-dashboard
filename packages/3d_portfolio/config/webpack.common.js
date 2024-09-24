module.exports={
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            },
               {
                test: /\.(glb|gltf)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: './public/models/car',
                    name: '[name].[ext]'
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
           
        ]
    }
}