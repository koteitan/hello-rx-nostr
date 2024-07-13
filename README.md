# hello-rx-nostr
rx-nostr のチュートリアルです

## 特徴
- サーバーサイドスクリプトなく github pages 上で公開できるようにする

## ローカルでの動作確認方法
- HTTP サーバーを立ち上げます
```bash
cd hello-rx-nostr
http-server #[^1]
```
- ブラウザを起動して http://localhost:8080 を開く
- すると index.html が表示されます
- index.html では、リレーから kind:1 を取得して、10 秒間画面に表示します

### npm と http-server のインストール
[^1]: 上記の手順で http-server を使うためには下記のインストールが必要です
```bash
sudo apt install npm
npm install -g http-server
```
