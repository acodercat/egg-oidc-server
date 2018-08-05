# egg-oidc-server


## 快速入门


```bash
$ npm i
```

先需要在`config.default.js`配置文件的config.sequelize中配置数据库信息。
如果是使用的是mysql就把dialect配置成mysql。
最后执行sequelize迁移
```bash
npm run migrate:up
```

迁移文件运行完毕后，把`config.default.js`配置文件中的config.view



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
