# ルーティング メニュー

ルーティング設定ファイル [src/routers](https://github.com/HalseySpicy/Geeker-Admin/tree/master/src/routers)：

::: tip

- 当プロジェクトデフォルトではダイナミックルーティングを利用しています
- スタティックルーティングを利用する場合は自由に改造可能です

:::

## ディレクトリ

```txt
.
├─ routers                    # ルーティング関連のファイル
├ ├─ modules                  # ルーティングモジュール
├ ├ ├─ dynamicRouter.ts       # ダイナミックルーティング
├ │ └─ staticRouter.ts        # スタティックルーティング
├ └─index.ts                  # axios
└─
```

## ルーティングのパラメータ

```typescript
/** ルーティングパラメータの概要 */
interface RouteRecordRaw {
	/** パス */
	path: string;
	/** ネーム (コンポーネントネーム, KeepAlive キャッシュのキー && ボタン権限のフィルターのキー) */
	name: string;
	/** リダイレクト */
	redirect: string;
	/** ビューのパス */
	component: string | (() => Promise<unknown>);
	/** メタ情 */
	meta: {
		/**  メニューとパンくずリストのアイコン */
		icon: string;
		/** ルーティングのタイトル (document.title または メニュー名に使われる) */
		title: string;
		/** メニュー内で隠すかどうか、ハイライトが必要なパス（通常、詳細ページで親メニューをハイライトするために使用） */
		activeMenu: string;
		/** 外部リングのパス */
		isLink: string;
		/** メニュー内で非表示フラグ */
		isHide: boolean;
		/** メニューが全画面表示フラグ */
		isFull: boolean;
		/** メニューがタブページに固定フラグ（ホームページは通常固定されています） */
		isAffix: boolean;
		/** ルーティングがキャッシュフラグ */
		isKeepAlive: boolean;
	};
	/** 子ルート */
	children: RouteRecordRaw[];
}
```

## ルーティングの実装

- ディフォルトはバックエンドへルーティングデータをリクエストします
- ルーティングデータをローカル置きたい場合は [src/api/modules/login.ts => getAuthMenuListApi](https://github.com/HalseySpicy/Geeker-Admin/blob/master/src/api/modules/login.ts)このように修正します 

```typescript
import authMenuList from "@/assets/json/authMenuList.json";

// メニューリストを取得
export const getAuthMenuListApi = () => {
	// return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`, {}, { noLoading: true });
	// メニューをローカルデータにしたい場合は、上の行のコードをコメントアウトし、ローカルのauthMenuList.jsonデータをインポートしてください。
	return authMenuList;
};
```

## ルートの追加

### 親ルート

```typescript
const home = {
	path: "/home/index",
	name: "home",
	component: "/home/index",
	meta: {
		icon: "HomeFilled",
		title: "ホーム",
		isLink: "",
		isHide: false,
		isFull: false,
		isAffix: true,
		isKeepAlive: true,
	},
};
```

### 子ルート

```typescript
const proTable = {
	path: "/proTable",
	name: "proTable",
	redirect: "/proTable/useProTable",
	meta: {
		icon: "MessageBox",
		title: "スーパーテーブル",
		isLink: "",
		isHide: false,
		isFull: false,
		isAffix: false,
		isKeepAlive: true,
	},
	children: [
		{
			path: "/proTable/useProTable",
			name: "useProTable",
			component: "/proTable/useProTable/index",
			meta: {
				icon: "Menu",
				title: "Use ProTable",
				isLink: "",
				isHide: false,
				isFull: false,
				isAffix: false,
				isKeepAlive: true,
			},
		},
	],
};
```

### ダイナミックルーティング（親-子階層）

```typescript
const proTable = {
	path: "/proTable",
	name: "proTable",
	redirect: "/proTable/useProTable",
	meta: {
		icon: "MessageBox",
		title: "スーパーテーブル",
		isLink: "",
		isHide: false,
		isFull: false,
		isAffix: false,
		isKeepAlive: true,
	},
	children: [
		{
			path: "/proTable/useProTable",
			name: "useProTable",
			component: "/proTable/useProTable/index",
			meta: {
				icon: "Menu",
				title: "Use ProTable",
				isLink: "",
				isHide: false,
				isFull: false,
				isAffix: false,
				isKeepAlive: true,
			},
			children: [
				{
					path: "/proTable/useProTable/detail/:id",
					name: "useProTableDetail",
					component: "/proTable/useProTable/detail",
					meta: {
						icon: "Menu",
						title: "ProTable 詳細",
						activeMenu: "/proTable/useProTable",
						isLink: "",
						isHide: true,
						isFull: false,
						isAffix: false,
						isKeepAlive: true,
					},
				},
			],
		},
	],
};
```

### ダイナミックルーティング（親子同階層）

```typescript
const proTable = {
	path: "/proTable",
	name: "proTable",
	redirect: "/proTable/useProTable",
	meta: {
		icon: "MessageBox",
		title: "スーパーテーブル",
		isLink: "",
		isHide: false,
		isFull: false,
		isAffix: false,
		isKeepAlive: true,
	},
	children: [
		{
			path: "/proTable/useTreeFilter",
			name: "useTreeFilter",
			component: "/proTable/useTreeFilter/index",
			meta: {
				icon: "Menu",
				title: "Use TreeFilter",
				isLink: "",
				isHide: false,
				isFull: false,
				isAffix: false,
				isKeepAlive: true,
			},
		},
		{
			path: "/proTable/useTreeFilter/detail/:id",
			name: "useTreeFilterDetail",
			component: "/proTable/useTreeFilter/detail",
			meta: {
				icon: "Menu",
				title: "TreeFilter 詳細",
				activeMenu: "/proTable/useTreeFilter",
				isLink: "",
				isHide: true,
				isFull: false,
				isAffix: false,
				isKeepAlive: true,
			},
		},
	],
};
```

## メニュー

- ルーティングデータから取得
- したがって、ルーティングデータ変更するとメニューも変わります、ルーティングとメニュー一緒に管理することが可能になります。

::: tip

- メニュー表示する際にisHide属性がtrueになっているルートがフィルターされます。

:::

- utils：

```typescript
/**
 * @description メニューデータをスキャンしてリンダする (meta.isHide == trueのルートを非表示する)
 * @param {Array} menuList メニューリスト
 * @returns {Array}
 * */
export function getShowMenuList(menuList: Menu.MenuOptions[]) {
	let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
	return newMenuList.filter((item) => {
		item.children?.length && (item.children = getShowMenuList(item.children));
		return !item.meta?.isHide;
	});
}
```
