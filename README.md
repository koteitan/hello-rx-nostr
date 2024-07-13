# hello-rx-nostr
- [rx-nostr](https://github.com/penpenpng/rx-nostr/) の簡単なチュートリアルです
- デモサイト: https://penpenpng.github.io/hello-rx-nostr/

## チュートリアルの内容
- このバージョンのチュートリアルでは、リレーから kind:1 を取得して 10 秒間画面に表示するというデモが動きます

## このチュートリアルの特徴
- サーバーサイドスクリプトなく github pages 上で公開できる範囲でいろいろなクライアント動作を試す

## ローカルでの動作確認方法
サーバーサイドスクリプトはなくていいんですが、ローカルで動かすためにはパッケージの最新版へのアクセスが CORS policy に引っかかるので、下記の方法でローカルサーバーを立ち上げて動作確認するのが楽です
- HTTP サーバーを立ち上げます[^1]
```bash
cd hello-rx-nostr
http-server
```
- ブラウザを起動して http://localhost:8080 を開く
- するとブラウザにここの index.html が表示されます
- index.html では、リレーから kind:1 を取得して、10 秒間画面に表示します

### npm と http-server のインストール
[^1]: 上記の手順で http-server を使うためには下記のインストールが必要です
#### ubuntu
```bash
sudo apt install npm
npm install -g http-server
```
#### mac
```bash
brew install node@20
npm install -g http-server
```
#### Windows
- https://nodejs.org/ja/download/
```bash
npm install -g http-server
```
