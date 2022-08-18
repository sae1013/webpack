const path = require('path');
module.exports = {
  mode:'development', //! 다음에는 런타임 환경을 읽어서 prod/dev 설정하도록 변경할것
  entry: "./source/index.js",
  output: {
    path : path.resolve(__dirname,"dist"),
    filename:'[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}