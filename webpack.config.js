const path = require('path');

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  devServer: {
    contentBase: outputPath
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
devServer {
  contentBase サーバー立ち上げ時に開くファイルを指定
}

*/