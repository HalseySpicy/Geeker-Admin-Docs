# クイックスタート

このドキュメンテーションでは、ソースコードのクローンから開発、ビルド、デプロイまでの基本的な操作を説明します。

## 環境準備

開発のため Node.js 16.x+、pnpm 7.x+、Git が必要です。
:::warning

- Node.js のバージョンは **16+** を推奨します、バージョンが低すぎると依存パッケージのインストールが失敗する可能性があります。

- デフォルトでは、依存パッケージのインストールツールとして pnpm を使用します。yarn や npm を使用すると、ロックがないため最新バージョンの依存関係がインストールされる可能性があります。
  :::

## 開発ツール設定

このプロジェクトでは、VSCode を開発に推奨します。プロジェクトにはすでに VSCode の設定が組み込まれており、推奨するプラグインと設定が含まれています。

> 🌈 推荐安装以下插件：

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) ==> Vue3 公式プラグイン
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) ==> Vue3 公式プラグイン（TypeScript）
- [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets) ==> Vue3 スニペット
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ==> コードチェック
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) ==> CSS チェック && フォーマット
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ==> コードフォーマット
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) ==> コーディングスタイルを統一
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) ==> 単語のスペルミスをチェック
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) ==> Sass 作成
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) ==> .env のハイライト表示

### .vscode > extensions.json

```json
{
	"recommendations": ["vue.volar", "vue.vscode-typescript-vue-plugin", "hollowtree.vue-snippets", "dbaeumer.vscode-eslint", "stylelint.vscode-stylelint", "esbenp.prettier-vscode", "editorconfig.editorconfig", "streetsidesoftware.code-spell-checker", "syler.sass-indented", "mikestead.dotenv"]
}
```

:::warning

- Vue3 のプロジェクトを開発する際は、Volar プラグインを有効にし、Vetur プラグインを無効にしてください。
- プロジェクトのデフォルトのフォーマットプログラムを Prettier に設定してください。

:::

## ソースコードのクローン

### GitHub からクローンする：

```bash
# クローン
git clone https://github.com/HalseySpicy/Geeker-Admin.git
```

##　インストール手順

### 依存するパッケージをインストールする：

```bash
# pnpmでインストール
pnpm install
```

### プロジェクトを実行する：

```bash
# 下記のいずれかのコマンドを実行
pnpm dev
pnpm serve
```

### プロジェクトをビルドする：

```bash
# 開発環境
pnpm build:dev

# 検証環境
pnpm build:test

# 本番環境
pnpm build:pro
```

### ソースコードの型をチェックとフォーマットする：

```bash
# eslintでチェック
pnpm lint:eslint

# prettierでフォーマット
pnpm lint:prettier

# stylelintswでフォーマット
pnpm lint:stylelint
```

### コミット：

```bash
# 変更をコミット（コミット前に自動的に lint:lint-staged コマンドが実行されます）
pnpm commit
```

## npm script 詳細

```json
{
	"scripts": {
		// ローカルで実行（dev環境）
		"dev": "vite",
		// ローカルで実行（dev環境）
		"serve": "vite",
		// ビルドパッケージ（dev環境）
		"build:dev": "vue-tsc && vite build --mode development",
		// ビルドパッケージ（test環境）
		"build:test": "vue-tsc && vite build --mode test",
		// ビルドパッケージ（pro環境）
		"build:pro": "vue-tsc && vite build --mode production",
		// TypeScript 型をチェック
		"type:check": "vue-tsc --noEmit --skipLibCheck",
		// ローカル環境でビルド後の dist をプレビューする
		"preview": "npm run build:dev && vite preview",
		// eslint の検査を実行する
		"lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
		// prettier でフォーマットする
		"lint:prettier": "prettier --write \"src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\"",
		// stylelint でフォーマットする
		"lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
		// lint-staged.config.js ファイル中のコマンドを実行する
		"lint:lint-staged": "lint-staged",
		// husky の設定を初期化する
		"prepare": "husky install",
		// 自動的にバージョンアップする
		"release": "standard-version",
		// 変更をコミットする（コマンドのカスタムが可能）
		"commit": "git add -A && czg && git push"
	}
}
```
