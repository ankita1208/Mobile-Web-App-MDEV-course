const path = require('path'); // Require the 'path' module from Node.js for working with file and directory paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require the HtmlWebpackPlugin for generating an HTML file

// Webpack configuration object
module.exports = {
  entry: './App.js', // Entry point of the application, starting with App.js
  output: {
    filename: 'bundle.js', // Name of the bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Test to match JavaScript and JSX files
        exclude: /node_modules/, // Exclude the 'node_modules' directory from processing
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling JavaScript and JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for handling ES6+ and React features
          },
        },
      },
      {
        test: /\.css$/, // Test to match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for handling CSS files
      },
      {
        test: /\.(png|jpe?g|gif)$/, // Test to match image files (png, jpg, jpeg, gif)
        use: [
          {
            loader: 'file-loader', // Use file-loader for handling image files
            options: {
              name: '[name].[ext]', // Output file name retains the original name and extension
              outputPath: 'assets', // Specify the output folder for images (assets folder)
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Enable importing .jsx files without specifying the extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template (create this file if it doesn't exist)
    }),
  ],
};
