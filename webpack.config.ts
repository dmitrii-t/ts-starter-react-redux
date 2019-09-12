import path from 'path';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import cssnano from 'cssnano';

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDevelopment = process.env.NODE_ENV !== 'production';
const paths = {
  nodeModules: path.resolve(__dirname, 'node_modules'),
  dist: path.resolve(__dirname, 'dist')
};

const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  entry: ['@babel/polyfill', './src/index'],
  output: {
    path: paths.dist,
    filename: `[name]-[hash:8]-bundle.js`,
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
        exclude: [paths.nodeModules],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              plugins: isDevelopment ? [cssnano()] : [],
            },
          },
        ],
      },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  devtool: isDevelopment ? 'inline-source-map' : false,
  // https://github.com/webpack/docs/wiki/webpack-dev-server
  // devServer: {},
  plugins: [
    new ManifestPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
};

export default [
  config
];
