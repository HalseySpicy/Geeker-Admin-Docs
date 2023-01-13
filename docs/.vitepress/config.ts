import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
	title: "Geeker-Admin",
	lang: "zh-CN",
	description: "Geeker Admin 中文文档",
	head: [
		["meta", { name: "author", content: "HalseySpicy" }],
		["meta", { name: "keywords", content: "Geeker, Geeker-Admin, Geeker-Admin-Docs, Vite, Vue, Vue3, Admin" }],
		["link", { rel: "icon", href: "/logo.svg" }],
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
		["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
	],
	markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
		algolia: {
			appId: "YMXN47DKMJ",
			apiKey: "8bf7d8e2b7e7b32a95f5aec9aca38a70",
			indexName: "Geeker-Admin",
		},
		editLink: {
			text: "为此页提供修改建议",
			pattern: "https://github.com/HalseySpicy/Geeker-Admin-Docs",
		},
		socialLinks: [{ icon: "github", link: "https://github.com/HalseySpicy/Geeker-Admin" }],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2022 Geeker-Admin",
		},
		nav: [
			{ text: "指南", link: "/guide/", activeMatch: "/guide" },
			{
				text: "组件",
				items: [
					{ text: "ProTable", link: "/components/proTable" },
					{ text: "SelectIcon", link: "/components/selectIcon" },
					{ text: "SelectFilter", link: "/components/selectFilter" },
					{ text: "TreeFilter", link: "/components/treeFilter" },
					{ text: "Upload", link: "/components/upload" },
					{ text: "ImportExcel", link: "/components/importExcel" },
					{ text: "SvgIcon", link: "/components/svgIcon" },
					{ text: "WangEditor", link: "/components/wangEditor" },
				],
			},
			{
				text: "相关链接",
				items: [
					{ text: "预览地址", link: "https://admin.spicyboy.cn/" },
					{ text: "Gitee 源码", link: "https://gitee.com/laramie/Geeker-Admin" },
					{ text: "GitHub 源码", link: "https://github.com/HalseySpicy/Geeker-Admin" },
					{ text: "文档源码", link: "https://github.com/HalseySpicy/Geeker-Admin-Docs" },
					{ text: "更新日志", link: "https://github.com/HalseySpicy/Geeker-Admin/blob/master/CHANGELOG.md" },
				],
			},
			{ text: "🍵 赞助", link: "/sponsor/index" },
		],

		sidebar: {
			"/guide/": [
				{
					text: "指南",
					collapsible: true,
					items: [
						{ text: "介绍", link: "/guide/introduce" },
						{ text: "快速上手", link: "/guide/" },
						{ text: "目录结构", link: "/guide/catalogue" },
						{ text: "项目配置", link: "/guide/configure" },
						{ text: "布局", link: "/guide/layout" },
						{ text: "路由、菜单", link: "/guide/router" },
						{ text: "权限", link: "/guide/auth" },
						{ text: "网络请求", link: "/guide/request" },
					],
				},
				{
					text: "进阶",
					collapsible: true,
					items: [
						{ text: "项目规范", link: "/guide/standard" },
						{ text: "主题配置", link: "/guide/theme" },
					],
				},
				{
					text: "其他",
					collapsible: true,
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			],
			"/components/": [
				{
					text: "组件",
					items: [
						{ text: "ProTable", link: "/components/proTable" },
						{ text: "SelectIcon", link: "/components/selectIcon" },
						{ text: "SelectFilter", link: "/components/selectFilter" },
						{ text: "TreeFilter", link: "/components/treeFilter" },
						{ text: "Upload", link: "/components/upload" },
						{ text: "ImportExcel", link: "/components/importExcel" },
						{ text: "SvgIcon", link: "/components/svgIcon" },
						{ text: "WangEditor", link: "/components/wangEditor" },
					],
				},
			],
		},
	},
};
