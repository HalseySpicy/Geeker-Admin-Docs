# 介绍

## 简介

[Geeker Admin](https://github.com/HalseySpicy/Geeker-Admin) 一款基于 Vue3.2、TypeScript、Vite3、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。项目提供强大的 [ProTable](../components/proTable.md) 组件，在一定程度上节省您的开发效率。另外本项目还封装了一些常用组件、hooks、指令、动态路由、按钮级别权限控制等功能。

## 文档

- 中文文档地址为 [Geeker-Admin-Docs](https://github.com/HalseySpicy/Geeker-Admin-Docs)，采用 [VitePress](https://vitepress.vuejs.org/) 开发。
- 如发现文档有误，欢迎提交 [Pull requests](https://github.com/HalseySpicy/Geeker-Admin-Docs/pulls) 帮助我们改进。

### 本地运行文档

- 如果需要本地运行文档，只需要将文档拉取到本地进行运行即可。

```text
# 拉取代码
git clone https://github.com/HalseySpicy/Geeker-Admin-Docs.git

# 安装依赖
npm install

# 运行文档
npm run docs:dev

# 打包文档
npm run docs:build
```

## 需要掌握的基础知识

- 本项目基于 Vue3.2、Vite3、TS、Pinia、Element-Plus 开发，并全部采用了 Vue3.2 的单文件组件 `＜script setup＞` 写法。

- 建议您在开发前先学习以下内容，提前了解和学习这些知识，会对项目理解非常有帮助：
  - [Vue3 文档](https://cn.vuejs.org/guide/introduction.html)
  - [Vue-Router 文档](https://router.vuejs.org/zh/guide/)
  - [Vite 文档](https://cn.vitejs.dev/guide/)
  - [TypeScript 文档](https://www.typescriptlang.org/zh/docs/)
  - [Pinia 文档](https://pinia.web3doc.top/introduction.html)
  - [Element-Plus 文档](https://element-plus.org/zh-CN/component/button.html)
  - [ES6 教程](https://es6.ruanyifeng.com/)

## 关于版本更新

- 本项目后期将会经历不断的更新迭代，后期尽量不进行破坏性更新。对于大多数前端开源管理系统，它们无法像 npm 包那样平滑的升级版本，因此我们为此给出一些升级的建议。
- 在编写代码时，应尽量避免修改核心部分。如果业务需要对框架核心内容进行修改，请记录下修改内容，以免在之后的升级过程中被覆盖掉。

## 浏览器支持

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。

- 生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
  | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
  |                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |

## 如何加入我们 ？

- [Geeker Admin](https://github.com/HalseySpicy/Geeker-Admin) 目前还在持续更新中，本项目欢迎并鼓励您的参与，我们共同努力维护和改进它 💪。项目使用 MIT 开源协议，遵循免费原则，不会收取任何费用和版权费用，您可以放心使用它。
- 如果您想加入此项目，可以多提供一些好的建议或者提交 [Pull requests](https://github.com/HalseySpicy/Geeker-Admin-Docs/pulls)。

<script setup> 
const contributor = [
	{src:'https://avatars.githubusercontent.com/u/51069636?v=4',link:'https://github.com/HalseySpicy'},
  {src:'https://avatars.githubusercontent.com/u/46669447?v=4',link:'https://github.com/denganjia'}
]
</script>

## 主要维护者

<Avatar v-for="user in contributor" :src="user.src" :link="user.link"/>
