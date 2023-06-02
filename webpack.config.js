const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		port: 3000,
		open: true,
		hot: true
	},
	entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'js', 'index.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', 'index.html')
	}),
	new MiniCssExtractPlugin({
		filename: 'style.css'
	})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			 },
			 {
				test: /\.(c|sa|sc)ss$/i,
				use: [MiniCssExtractPlugin.loader,
					 "css-loader",
					 {
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')]
							}
						}
					 },
					  "sass-loader"],
			 },
			 {
				test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
			 },
		]
	}
}