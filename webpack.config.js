const path = require('path');
const fs =require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = {
    src: path.join(__dirname,'src'),
    dist: path.join(__dirname,'dist'),
}
const PAGES_DIR = `${paths.src}/pages/index`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


module.exports={
    mode: 'development',
    entry: {
        "index": paths.src + '/pages/index/index.js' ,
        
    }, 
    devServer: {
        
        
        port: 9000
    },
   
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
             
            
          })),
          
       
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    'css-loader',
                    'sass-loader',

                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(ttf|svg|woff)$/,
                use: ["file-loader"]
            }
        ],
    },
    output: {
      
        filename: '[name].[contenthash].bundle.js',
       
        path: path.resolve(__dirname, 'dist'),
        
    },
  
    
   
   

    
};