import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
	},
};
