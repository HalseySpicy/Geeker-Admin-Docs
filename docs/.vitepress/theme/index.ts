// @ts-nocheck
import DefaultTheme from "vitepress/theme";
import Avatar from "../components/Avatar.vue";
import Preview from "../components/Preview.vue";
import hevueImgPreview from "hevue-img-preview";
import "./styles/index.scss";

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component("Avatar", Avatar);
		ctx.app.component("Preview", Preview);
		ctx.app.use(hevueImgPreview, { keyboard: true, clickMaskCLose: true, closeBtn: false });
	},
};
