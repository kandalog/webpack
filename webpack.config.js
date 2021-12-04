const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,//2KBを超える場合
          name: './img/[name].[ext]'
        }
      }
    ]
  }
}





/*
webpack.config.jsを開発環境のトップレベルに作成
デフォルトの設定や各種設定はwebpackの公式サイトで確認可能
webpack実行時は npx webpack --mode development
(configの名前や保存場所を別なものにしたい場合) npx webpack --config <この先は使う時調べて>
*/

/*
path  絶対pathを使用するためにimport __dirnameが開発環境のトップレベルまで
entry bundleする対象を設定
output {
  path 出力先を変更
  filename 解決時のファイル名を設定
}
module {
  rules[
    {
      text 対象のファイルを正規表現で
      use  使用するローダーを設定

      注意点(ローダーを複数設定する場合下から順に走る。 依存関係に注意)
    }
  ]
}

file-loaderはoptionsで設定する
devServer {
  contentBase サーバー立ち上げ時に開くファイルを指定
}

*/