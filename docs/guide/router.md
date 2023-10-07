# 路由、菜单

路由配置在 [src/routers](https://github.com/HalseySpicy/Geeker-Admin/tree/master/src/routers) 文件下面：

::: tip

- 项目默认采用动态添加路由方式控制
- 需要其它路由功能根据自己项目需求改造

:::

## 目录结构

```txt
.
├─ routers                    # 路由相关文件
├ ├─ modules                  # 路由模块
├ ├ ├─ dynamicRouter.ts       # 动态路由添加逻辑
├ │ └─ staticRouter.ts        # 静态路由配置
├ └─index.ts                  # 封装后的router
└─
```

## 路由参数

```typescript
/** 路由参数简介 */
interface RouteRecordRaw {
	/** 路由访问路径 */
	path: string;
	/** 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选) */
	name: string;
	/** 路由重定向地址 */
	redirect: string;
	/** 视图文件路径 */
	component: string | (() => Promise<unknown>);
	/** 路由元信息 */
	meta: {
		/** 菜单和面包屑对应的图标 */
		icon: string;
		/** 路由标题 (用作 document.title || 菜单的名称) */
		title: string;
		/** 是否在菜单中隐藏, 需要高亮的 path (通常用作详情页高亮父级菜单) */
		activeMenu: string;
		/** 路由外链时填写的访问地址 */
		isLink: string;
		/** 是否在菜单中隐藏 (通常列表详情页需要隐藏) */
		isHide: boolean;
		/** 菜单是否全屏 (示例：数据大屏页面) */
		isFull: boolean;
		/** 菜单是否固定在标签页中 (首页通常是固定项) */
		isAffix: boolean;
		/** 当前路由是否缓存 */
		isKeepAlive: boolean;
	};
	/** 多级路由嵌套 */
	children: RouteRecordRaw[];
}
```

## 路由实现

- 默认根据后端接口返回的数据生成动态路由
- 如果想把路由变成本地，直接更改 [src/api/modules/login.ts => getAuthMenuListApi](https://github.com/HalseySpicy/Geeker-Admin/blob/master/src/api/modules/login.ts) 方法

```typescript
import authMenuList from "@/assets/json/authMenuList.json";

// 获取菜单列表
export const getAuthMenuListApi = () => {
	// return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`, {}, { noLoading: true });
	// 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authMenuList.json 数据
	return authMenuList;
};
```

## 新增路由

### 一级路由

```typescript
const home = {
	path: "/home/index",
	name: "home",
	component: "/home/index",
	meta: {
		icon: "HomeFilled",
		title: "首页",
		isLink: "",
		isHide: false,
		isFull: false,
		isAffix: true,
		isKeepAlive: true,
	},
};
```

### 二级路由

```typescript
const proTable = {
	path: "/proTable",
	name: "proTable",
	redirect: "/proTable/useProTable",
	meta: {
		icon: "MessageBox",
		title: "超级表格",
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
				title: "使用 ProTable",
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

### 动态路由（子级详情页）

```typescript
const proTable = {
	path: "/proTable",
	name: "proTable",
	redirect: "/proTable/useProTable",
	meta: {
		icon: "MessageBox",
		title: "超级表格",
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
				title: "使用 ProTable",
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
						title: "ProTable 详情",
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

### 动态路由（同级详情页）

```typescript
const proTable = {
	path: "/proTable",
	name: "proTable",
	redirect: "/proTable/useProTable",
	meta: {
		icon: "MessageBox",
		title: "超级表格",
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
				title: "使用 TreeFilter",
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
				title: "TreeFilter 详情",
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

## 菜单

- 根据后台返回的菜单数据转换而来
- 所以只要更改后台数据菜单会随之改变，整个项目只需维护一套数据即可

::: tip

- 菜单展示时需要过滤掉 isHide 属性为 true 的路由

:::

- utils：

```typescript
/**
 * @description 使用递归过滤出需要渲染在左侧菜单的列表 (需剔除 isHide == true 的菜单)
 * @param {Array} menuList 菜单列表
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
