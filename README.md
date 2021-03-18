# スロットゲーム
ベース：[Phaser.jsでゲームを作る](https://scrapbox.io/programming-technology/Phaser.js%E3%81%A7%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%9C%E3%82%8B)

## 導入からデプロイまで
本リポジトリをクローンし、以下に従う。
``` bash
npmパッケージ取得
$ yarn

開発用サーバ起動
$ yarn dev

webpackビルド
$ yarn build

firebaseにデプロイ (要 npm i -g firebase-tools ; firebase login)
$ firebase deploy

ビルドしてからデプロイ
$ yarn deploy
```

アセット類は`public/assets`以下に配置します。  
audios, imagesがありますが、他にも必要な場合はwebpack.config.jsの[PhaserAssetsWebpackPlugin](https://www.npmjs.com/package/phaser-assets-webpack-plugin)の設定を修正してください。  
