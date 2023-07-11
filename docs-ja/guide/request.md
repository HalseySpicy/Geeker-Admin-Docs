# 网络请求

- 项目封装了`Axios`来做网络请求，包括请求 Loading、错误处理、取消请求等功能
- 可以按照自己项目需求来进行封装

## 目录结构

```txt
├─ api                       # 网络请求文件夹
├ ├─config                   # 网络请求相关配置 e.p：公共URL前缀
├ ├─helper                   # 辅助函数：错误处理、取消请求
├ ├ ├─axiosCancel.ts         # 取消请求
├ ├ ├─checkStatus.ts         # 检查请求返回的状态
├ ├─interface                # api接口的请求参数和返回数据的类型定义文件夹
├ ├─modules                  # 请求函数模块，强烈建议根据不同的模块创建不同的请求文件
├ └─index.ts                 # 封装后的axios
└─
```

## 配置

> 不出意外的话，你应该要修改请求的`baseURL`。

在`index.ts`文件的 15 行你可以看到一个默认的基础配置

```ts
const config: AxiosRequestConfig = {
	// 默认地址请求地址，可在 .env.** 文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间
	timeout: ResultEnum.TIMEOUT as number,
	// 跨域时候允许携带凭证
	withCredentials: true,
};
```

你可以在此处修改或添加 axios 的基本配置。

:::warning 警告
因为工程性等原因，`baseURL`是通过环境变量加载的。你应该去项目根目录下的`.env.***`文件中修改`VITE_API_URL`，而不是在此处直接修改。
:::

## 请求拦截

代码位置：`index.ts 30:48`

```ts
/**
 * @description 请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * token校验(JWT) : 接受服务器返回的 token,存储到 vuex/pinia/本地储存当中
 */
this.service.interceptors.request.use(
	(config: CustomAxiosRequestConfig) => {
		const userStore = useUserStore();
		// 当前请求不需要显示 loading，在 api 服务中通过指定的第三个参数: { noLoading: true } 来控制
		config.noLoading || showFullScreenLoading();
		if (config.headers && typeof config.headers.set === "function") {
			config.headers.set("x-access-token", userStore.token);
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);
```

- 在请求之前检查当前请求需不需要全局的 loading，并且在 header 请求头中携带`x-access-token`。这个 token 名称要根据实际情况，不一定叫`x-access-token`，可以跟后端确认一下。而且 token 也不一定是放在 header 里面，具体情况根据自己项目配置。

## 响应拦截

代码位置：`index.ts 50:87`

```typescript
/**
 * @description 响应拦截器
 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
 */
this.service.interceptors.response.use(
	(response: AxiosResponse) => {
		const { data } = response;
		const userStore = useUserStore();
		tryHideFullScreenLoading();
		// 登陆失效
		if (data.code == ResultEnum.OVERDUE) {
			userStore.setToken("");
			router.replace(LOGIN_URL);
			ElMessage.error(data.msg);
			return Promise.reject(data);
		}
		// 全局错误信息拦截（防止下载文件的时候返回数据流，没有 code 直接报错）
		if (data.code && data.code !== ResultEnum.SUCCESS) {
			ElMessage.error(data.msg);
			return Promise.reject(data);
		}
		// 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
		return data;
	},
	async (error: AxiosError) => {
		const { response } = error;
		tryHideFullScreenLoading();
		// 请求超时 && 网络错误单独判断，没有 response
		if (error.message.indexOf("timeout") !== -1) ElMessage.error("请求超时！请您稍后重试");
		if (error.message.indexOf("Network Error") !== -1) ElMessage.error("网络错误！请您稍后重试");
		// 根据服务器响应的错误状态码，做不同的处理
		if (response) checkStatus(response.status);
		// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
		if (!window.navigator.onLine) router.replace("/500");
		return Promise.reject(error);
	}
);
```

- 在获取到接口的响应后，不管成功或失败，先尝试关闭全局 loading`tryHideFullScreenLoading`，然后根据成功或失败做不同的处理。

:::warning 注意
这里的请求成功指的是**网络请求**，不是**业务逻辑**成功。
:::

- 请求成功后会判断接口返回的响应数据里的 code。根据不同的 code 做不同的处理。
  这里要注意`ResultEnum`中定义的 code 是不是跟你业务上的 code 一样。

- 请求失败也是一样，只不过这里的失败是指网络失败。网络请求失败后服务器返回的状态码都是有迹可循的，只需要根据不同的状态码，做不同的处理。这就是`checkStatus`的工作。

## 示例

> 现在要写一个登录接口

1. api->modules 中新建一个`login.ts`文件。
2. 在`login.ts`中引入封装后的 axios。
3. 编写请求函数。
4. 可选的，给请求函数的入参和返回值加上 TS 类型限制。

```ts
import http from "@/api";

// 登录函数
// 松散的类型限制
export const loginApi = (params: any) => {
	return http.post("/login_url", params);
};

interface LoginParams {
	account: string;
	password: string;
}
interface LoginResult {
	token: string;
	anything: any;
}
// 严格的类型限制
export const typeLoginApi = (params: LoginParams) => {
	return http.post<LoginResult>("/login_url", params);
};
```

如何使用 api 函数呢，很简单。

```ts
import { loginApi } from "@/api/modules/login";

// 模拟表单数据
const form = {
	account: "admin",
	password: "123456",
};
const login = async () => {
	// 如果请求成功，那么就会执行下面的代码。基本上不需要错误处理，错误情况都被拦截了
	// 除非你有需要，你可以使用`.catch`
	// const data = await loginApi(form).catch((err)=>{
	// 错误处理
	// })
	const data = await loginApi(form);
	// 保存token，跳转页面等操作
};
```
