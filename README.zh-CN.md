# egg-oidc-server



## 安装依赖模块

```bash
$ npm i
```


## 执行迁移

先需要在`config.default.js`配置文件的`config.sequelize`中配置数据库信息。
如果是使用的是mysql就把dialect配置成mysql。
然后执行sequelize迁移
```bash
npm run migrate:up
```

迁移文件运行完毕后，把`config.default.js`配置文件中的`config.view`配置项的注释打开



## 运行

linux 

```bash
DEBUG=oidc-provider:*npm run dev
```

windows 

```bash
set DEBUG=oidc-provider:*
npm run dev
```
