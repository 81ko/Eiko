# Eiko Annabi Portfolio

GitHub と Vercel で公開するための静的ポートフォリオサイトです。

## GitHubへのアップロード

このZIPを展開し、**中身のファイルをすべてGitHubリポジトリの最上位に配置**してください。

リポジトリの最上位で、次のファイルが直接見える状態が正しい構成です。

```text
index.html
styles.css
script.js
public/
package.json
build.mjs
vercel.json
README.md
```

ZIPを格納するための親フォルダーを、そのままもう一段GitHubへアップロードしないでください。

## Vercelで公開

1. Vercelで **Add New → Project** を選択します。
2. このGitHubリポジトリをImportします。
3. **Root Directory** は空欄（リポジトリのルート）にします。
4. `vercel.json` により、次の設定が自動適用されます。
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deployを実行します。

## ローカル確認

```bash
npm run build
npm start
```

`dist/index.html` が生成されれば、Vercel用ビルドは成功しています。
