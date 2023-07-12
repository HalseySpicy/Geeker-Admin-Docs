# 紹介

## はじめに

[Geeker Admin](https://github.com/HalseySpicy/Geeker-Admin) は、Vue3.3、TypeScript、Vite3、Pinia、Element-Plus など最新のフロント技術を利用して開発されたオープンソースの管理システムテンプレートです。便利な [ProTable](../components/proTable.md) コンポーネントを提供し，より早くシステムが出来上がることができます。さらに、よく使われるコンポーネント、フック、ディレクティブ、ルーティングなども実装されています。

## ドキュメンテーション

- ドキュメンテーションは [VitePress](https://vitepress.vuejs.org/) で作られています、ソースコードは [Geeker-Admin-Docs](https://github.com/HalseySpicy/Geeker-Admin-Docs)です。
- ドキュメンテーションに誤りがある場合は [Pull requests](https://github.com/HalseySpicy/Geeker-Admin-Docs/pulls)をして、 改善にご協力ください。

### ローカルでドキュメンテーションを実行

- 下記のコマンドを実行して、ローカルでドキュメンテーションを実行することができます。

```bash
# クローン
git clone https://github.com/HalseySpicy/Geeker-Admin-Docs.git

# 依存関係のインストール
pnpm install

# ドキュメンテーションを実行
pnpm docs:dev

# ドキュメンテーションをビルド
pnpm docs:build
```

## 必要な知識

- このプロジェクトは Vue3.3、Vite4、TS、Pinia、Element-Plus を基に開発されており、Composition API と呼ばれる API スタイルを採用されています。

- 開発を始める前に以下の内容を学ぶことをお勧めします。
  - [Vue3](https://cn.vuejs.org/guide/introduction.html)
  - [Vue-Router](https://router.vuejs.org/zh/guide/)
  - [Vite](https://cn.vitejs.dev/guide/)
  - [TypeScript](https://www.typescriptlang.org/zh/docs/)
  - [Pinia](https://pinia.web3doc.top/introduction.html)
  - [Element-Plus](https://element-plus.org/zh-CN/component/button.html)
  - [ES6](https://es6.ruanyifeng.com/)

## バージョン更新について

- このプロジェクトは今後も更新と改良が続けられます、なるべく破壊的変更しないようにしますが。やむなく旧バージョンとの互換性がなくなってしまうことがあります。
- コードを組む際には，コア部分の変更を避けるようにしてください。もし変更したら、変更内容をメモしておいてください。

## 対応ブラウザ

- 開発環境では、最新ばの Chrome を利用することおすすめです。 [Download](https://www.google.com/intl/zh-CN/chrome/)。

- 本番環境では現代のブラウザがサポートされていますが、IE（Internet Explorer）ブラウザはサポートされていません。ブラウザサポートについては [Can I Use Es Module](https://caniuse.com/?search=ESModule)を参照してください。

  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
  | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
  |                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |

## ジョイナス？

- [Geeker Admin](https://github.com/HalseySpicy/Geeker-Admin) は新しい技術の更新に伴い、更新と改良が続けられます。もし、このプロジェクトが気に入ったら、スターを付けてください。また、私たちと一緒に開発をしていただければ幸いです。
- いいアイデアがあれば、ぜひ[Pull requests](https://github.com/HalseySpicy/Geeker-Admin-Docs/pulls)をご提出ください。

<script setup>
const contributor = [
	{src:'https://avatars.githubusercontent.com/u/51069636?v=4',link:'https://github.com/HalseySpicy'},
  {src:'https://avatars.githubusercontent.com/u/46669447?v=4',link:'https://github.com/denganjia'}
]
</script>

## 貢献一覧

<Avatar v-for="user in contributor" :src="user.src" :link="user.link"/>
