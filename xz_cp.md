# xz_cp.war

## 上线前注意事项:

* 数据源修改为正式数据库
* Redis 删除测试数据

## Swagger2:

* `URL http://www.oijkl.com/xz_cp/swagger-ui.html`
* 登录时使用添加 *HttpHeader* `cipher : 47153133655C36F09C86040128E874BD`
* 测试使用的是***测试数据库***数据
* 测试使用的是***线上Redis***
* 项目测试完成后***上线应删除***Redis里所有前缀为 `"COUPON:"//卡券记录前缀"CONSUME:"//卡券核销前缀`

## Druid:

* `URL : http://www.oijkl.com/xz_cp/druid/index.html`
* 默认登录名及密码为数据库账户及密码`(xzTestRoot::xinzhiTest07!)`