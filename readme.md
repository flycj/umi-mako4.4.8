采用umi 最新版本创建的项目

pnpm dlx create-umi@latest 创建
umi: 4.4.8
mako 版本： 0.11.9
node: v20.18.1

问题1：make 还是不支持 xxx.module.scss 的写法，具体看项目中 pages/index.tsx 页面，采用 `import styles from './index.module.scss';` 后无效

问题2：umi采用mako 配置后，在调整 index.module.scss 的时候，命令行工具会报错，导致项目运行终端，报错信息如下：
```
node_modules\.pnpm\@umijs+preset-umi@4.4.8_@types+node@22.14.1_@types+react@18.3.20_lightningcss@1.22.1_rollup@3_ag626x2jyzdgcuzxevuvn57obq\node_modules\@umijs\preset-umi\dist\features\appData\appData.js:131
        content: JSON.stringify(api.appData, null, 2),
                      ^

TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Array'
    |     index 2 -> object with constructor 'LessPlugin'
    |     property 'params' -> object with constructor 'Object'
    |     property 'config' -> object with constructor 'Object'
    --- property 'plugins' closes the circle
    at JSON.stringify (<anonymous>)
    at Hook.fn (D:\Users\xxx\tests\umi4.4.8\node_modules\.pnpm\@umijs+preset-umi@4.4.8_@types+node@22.14.1_@types+react@18.3.20_lightningcss@1.22.1_rollup@3_ag626x2jyzdgcuzxevuvn57obq\node_modules\@umijs\preset-umi\dist\features\appData\appData.js:131:23)
    at async D:\Users\xxx\tests\umi4.4.8\node_modules\.pnpm\@umijs+core@4.4.8\node_modules\@umijs\core\dist\service\service.js:184:15

```
