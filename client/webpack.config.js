const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.tsx', // Ensure this points to your React entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Ensure Webpack resolves TS and TSX files
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader', // or 'babel-loader' if you're using Babel
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(), // Load environment variables from .env
  ],
};
