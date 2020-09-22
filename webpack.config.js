const path = require('path');
const fs =require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = {
    src: path.join(__dirname,'src'),
}
const PAGES_DIR = `${paths.src}/pages/index`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports={
    mode: 'development',
    entry: {
        "index": paths.src + '/pages/index/index.js' ,
        
    }, 
   
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            
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
              }
        ],
    },
    output: {
      
        filename: '[name].bundle.js',
       
        path: path.resolve(__dirname, 'dist'),
        
    },
  
    
   
   

    
};