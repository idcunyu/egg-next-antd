# egg-next-antd

## 环境依赖

- nodejs > 10.x
- npm > 6.9.0
- Node.js 源配置

## 启动服务和编译资源

- `npm run dev` 开发环境启动项目(会启用 `HMR`)
- `npm run start` 启动egg
- `npm run stop` 停止egg
- `npm run build` 编译next

## 项目规范

### 项目结构描述

```
egg-next-antd
├── package.json
├── app
|   ├── router.js                  // 用于配置 URL 路由规则
│   ├── controller/**.js           // 用于解析用户的输入，处理后返回相应的结果
│   ├── service (可选)             // 用于编写业务逻辑层，可选，建议使用
│   |   └── user.js
│   ├── middleware (可选)          // 用于编写中间件，可选
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config                         // 用于编写配置文件
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
├── next                           // next
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js

```

### 相关技术简介

#### Egg.js

- 文档：https://eggjs.org/zh-cn/intro/
- Koa2基础：https://koa.bootcss.com/

### Next.js

> Next.js 是一个轻量级的 React 服务端渲染应用框架。

- 文档：https://nextjs.org/docs
- React基础：https://zh-hans.reactjs.org/

#### Ant-design

> 蚂蚁金服出品，React.js框架组件库。

- 文档：https://ant.design/

#### Axios

> Promise based HTTP client for the browser and node.js

- 文档：https://github.com/axios/axios





# egg-proj



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org
