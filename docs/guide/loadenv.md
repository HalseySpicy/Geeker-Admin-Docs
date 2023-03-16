# loadEnv源码解析
## 获取环境变量
```typescript
function loadEnv(
  mode: string,
  envDir: string,
  prefixes: string | string[] = 'VITE_',
): Record<string, string> {
   // mode为local抛出错误
  if (mode === 'local') {
    throw new Error(
      `"local" cannot be used as a mode name because it conflicts with ` +
        `the .local postfix for .env files.`,
    )
  }
  // 判断是否为数组,数组直接返回，不是数组则返回 [prefixes], 值为['VITE_']
  prefixes = arraify(prefixes)
  // env = {}
  const env: Record<string, string> = {}

  // envFiles = ['.env', '.env.local', '.env.development', '.env.development.local']
  const envFiles = [
    /** default file */ `.env`,
    /** local file */ `.env.local`,
    /** mode file */ `.env.${mode}`,
    /** mode local file */ `.env.${mode}.local`,
  ]
  /** 
   * Object.fromEntries
   * 使用示例
   * Object.fromEntries([['a', 1], ['b', 2]])
   * 返回值{ a: 1, b: 2}
   * Array.prototype.flatMap
   * [2, 3, 4].flatMap((x) => [x, x * 2])
   * 返回值 [2, 4, 3, 6, 4, 8]
   */
   // parsed = { VITE_API_URL: '/api', ... }
  const parsed = Object.fromEntries(
    envFiles.flatMap((file) => {
      // 按envFiles下标2 .env.development, path='/Users/admin/Desktop/project/.env.development'
      // 下面有lookupFile解析
      const path = lookupFile(envDir, [file], {
        pathOnly: true,
        rootDir: envDir,
      })
      if (!path) return []
      // fs.readFileSync 读取文件内容，返回Buffer
      // parse为dotenv方法,把一个Buffe转成对象
      // { VITE_API_URL: '/api', NODE_ENV: 'development' }
      // Object.entries
      // [['VITE_API_URL','/api'], ['NODE_ENV': 'development']]
      return Object.entries(parse(fs.readFileSync(path)))
    }),
  )

  // test NODE_ENV override before expand as otherwise process.env.NODE_ENV would override this
  if (parsed.NODE_ENV && process.env.VITE_USER_NODE_ENV === undefined) {
    process.env.VITE_USER_NODE_ENV = parsed.NODE_ENV
  }
  // support BROWSER and BROWSER_ARGS env variables
  if (parsed.BROWSER && process.env.BROWSER === undefined) {
    process.env.BROWSER = parsed.BROWSER
  }
  if (parsed.BROWSER_ARGS && process.env.BROWSER_ARGS === undefined) {
    process.env.BROWSER_ARGS = parsed.BROWSER_ARGS
  }
  
  // 把parsed内容放到process.env中
  // let environment variables use each other
  // `expand` patched in patches/dotenv-expand@9.0.0.patch
  expand({ parsed })

  // only keys that start with prefix are exposed to client
  for (const [key, value] of Object.entries(parsed)) {
    // 如果是以VITE_开头的放到env中
    if (prefixes.some((prefix) => key.startsWith(prefix))) {
      env[key] = value
    }
  }

  // check if there are actual env variables starting with VITE_*
  // these are typically provided inline and should be prioritized
  for (const key in process.env) {
    if (prefixes.some((prefix) => key.startsWith(prefix))) {
      // 如果是以VITE_开头的放到env中,这句话说明如果相同的话,process.env会覆盖上去
      env[key] = process.env[key] as string
    }
  }
  // 最终返回出去,例{ VITE_API_URL: '/api', ... }
  return env
}
```
# lookupFile源码解析
## 获取文件路径
```typescript
function lookupFile(
  dir: string,
  formats: string[],
  options?: LookupFileOptions,
): string | undefined {
  for (const format of formats) {
    // /Users/admin/Desktop/project/.env.development
    const fullPath = path.join(dir, format)
    // 文件是否存在 && 是否是个文件
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      // result = '/Users/admin/Desktop/project/.env.development'
      const result = options?.pathOnly
        ? fullPath
        : fs.readFileSync(fullPath, 'utf-8')
        // 没有predicate 为true, 短路不执行options.predicate(result)
      if (!options?.predicate || options.predicate(result)) {
        return result
      }
    }
  }
  const parentDir = path.dirname(dir)
  if (
    parentDir !== dir &&
    (!options?.rootDir || parentDir.startsWith(options?.rootDir))
  ) {
    return lookupFile(parentDir, formats, options)
  }
}
```