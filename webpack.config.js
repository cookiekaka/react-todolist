module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname +'/public',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]'
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  }
};