# 買っていい服診断

服の素材タグ・洗濯表示・価格・用途から、「買い」「条件付きで買い」「見送り推奨」などを判定するMVPです。

## フォルダ構成

- `docs/`
  - 公開中のWebアプリ本体です。
  - GitHub Pagesではこのフォルダの中身を公開します。
- `docs/index.html`
  - アプリ画面です。
- `docs/styles.css`
  - 画面デザインです。
- `docs/app.js`
  - 素材抽出、洗濯表示入力、診断ロジックです。
- `docs/manifest.webmanifest`
  - スマホのホーム画面追加用設定です。
- `docs/service-worker.js`
  - キャッシュ更新用ファイルです。
- `docs/icon.svg`
  - アプリアイコンです。

## 公開URL

https://cangtaig2-oss.github.io/apparel-quality-checker/

## 使い方

1. `docs/index.html` をブラウザで開く
2. タグ写真を撮る、または写真フォルダから選ぶ
3. 素材抽出結果と洗濯表示を確認する
4. 商品情報を入力して診断する
