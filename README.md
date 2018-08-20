# egg-oidc-server



## 安装依赖模块

```bash
$ npm i
```


## 执行迁移

迁移的配置文件在database目录下的`config.json`。
```bash
 npm run sequelize -- db:migrate
```

迁移文件运行完毕后，把`config.default.js`配置文件中的`config.view`配置项的注释打开。
这里注释的原因是在执行迁移的时候，这里会报错。具体的报错原因是因为在配置文件中使用了path模块。



## 运行

### linux

```bash
DEBUG=oidc-provider:* npm run dev
```

### windows

```bash
set DEBUG=oidc-provider:* & npm run dev
```

## 说明
在`app/extend`有一个`oidc_persistence.js`文件，这个文件是对oidc的数据进行持久化，比如对client和accessToken进行保存。
如果没有则默认是存放在内存中，重启node后数据将清空。

## 路由

### 发现服务

> GET /.well-known/openid-configuration

oidc的发现服务，这个接口返回了服务的详细信息。

#### 响应

```json
{
    "authorization_endpoint": "http://localhost:7001/auth",
    "claims_parameter_supported": true,
    "claims_supported": [
        "sub",
        "sid",
        "auth_time",
        "iss"
    ],
    "grant_types_supported": [
        "implicit",
        "authorization_code",
        "client_credentials",
        "password"
    ],
    "id_token_signing_alg_values_supported": [
        "none",
        "HS256",
        "HS384",
        "HS512",
        "ES256",
        "ES384",
        "ES512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512"
    ],
    "issuer": "http://127.0.0.1:3000",
    "jwks_uri": "http://localhost:7001/certs",
    "registration_endpoint": "http://localhost:7001/reg",
    "request_object_signing_alg_values_supported": [
        "none",
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512",
        "ES256",
        "ES384",
        "ES512"
    ],
    "request_parameter_supported": true,
    "request_uri_parameter_supported": true,
    "require_request_uri_registration": true,
    "response_modes_supported": [
        "form_post",
        "fragment",
        "query"
    ],
    "response_types_supported": [
        "code id_token token",
        "code id_token",
        "code token",
        "code",
        "id_token token",
        "id_token",
        "none"
    ],
    "scopes_supported": [
        "openid"
    ],
    "subject_types_supported": [
        "public"
    ],
    "token_endpoint": "http://localhost:7001/token",
    "token_endpoint_auth_methods_supported": [
        "none",
        "client_secret_basic",
        "client_secret_jwt",
        "client_secret_post",
        "private_key_jwt"
    ],
    "token_endpoint_auth_signing_alg_values_supported": [
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512",
        "ES256",
        "ES384",
        "ES512"
    ],
    "userinfo_endpoint": "http://localhost:7001/me",
    "userinfo_signing_alg_values_supported": [
        "none",
        "HS256",
        "HS384",
        "HS512",
        "ES256",
        "ES384",
        "ES512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512"
    ],
    "code_challenge_methods_supported": [
        "S256"
    ],
    "introspection_endpoint": "http://localhost:7001/token/introspection",
    "introspection_endpoint_auth_methods_supported": [
        "none",
        "client_secret_basic",
        "client_secret_jwt",
        "client_secret_post",
        "private_key_jwt"
    ],
    "introspection_endpoint_auth_signing_alg_values_supported": [
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512",
        "ES256",
        "ES384",
        "ES512"
    ],
    "revocation_endpoint": "http://localhost:7001/token/revocation",
    "revocation_endpoint_auth_methods_supported": [
        "none",
        "client_secret_basic",
        "client_secret_jwt",
        "client_secret_post",
        "private_key_jwt"
    ],
    "revocation_endpoint_auth_signing_alg_values_supported": [
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512",
        "ES256",
        "ES384",
        "ES512"
    ],
    "id_token_encryption_alg_values_supported": [
        "RSA-OAEP",
        "RSA-OAEP-256",
        "RSA1_5",
        "ECDH-ES",
        "ECDH-ES+A128KW",
        "ECDH-ES+A192KW",
        "ECDH-ES+A256KW",
        "A128GCMKW",
        "A192GCMKW",
        "A256GCMKW",
        "A128KW",
        "A192KW",
        "A256KW",
        "PBES2-HS256+A128KW",
        "PBES2-HS384+A192KW",
        "PBES2-HS512+A256KW"
    ],
    "id_token_encryption_enc_values_supported": [
        "A128CBC-HS256",
        "A128GCM",
        "A192CBC-HS384",
        "A192GCM",
        "A256CBC-HS512",
        "A256GCM"
    ],
    "userinfo_encryption_alg_values_supported": [
        "RSA-OAEP",
        "RSA-OAEP-256",
        "RSA1_5",
        "ECDH-ES",
        "ECDH-ES+A128KW",
        "ECDH-ES+A192KW",
        "ECDH-ES+A256KW",
        "A128GCMKW",
        "A192GCMKW",
        "A256GCMKW",
        "A128KW",
        "A192KW",
        "A256KW",
        "PBES2-HS256+A128KW",
        "PBES2-HS384+A192KW",
        "PBES2-HS512+A256KW"
    ],
    "userinfo_encryption_enc_values_supported": [
        "A128CBC-HS256",
        "A128GCM",
        "A192CBC-HS384",
        "A192GCM",
        "A256CBC-HS512",
        "A256GCM"
    ],
    "request_object_encryption_alg_values_supported": [
        "A128GCMKW",
        "A192GCMKW",
        "A256GCMKW",
        "A128KW",
        "A192KW",
        "A256KW",
        "PBES2-HS256+A128KW",
        "PBES2-HS384+A192KW",
        "PBES2-HS512+A256KW",
        "ECDH-ES",
        "ECDH-ES+A128KW",
        "ECDH-ES+A192KW",
        "ECDH-ES+A256KW",
        "RSA-OAEP",
        "RSA-OAEP-256",
        "RSA1_5"
    ],
    "request_object_encryption_enc_values_supported": [
        "A128CBC-HS256",
        "A128GCM",
        "A192CBC-HS384",
        "A192GCM",
        "A256CBC-HS512",
        "A256GCM"
    ],
    "claim_types_supported": [
        "normal"
    ]
}

```


### 客户端注册

> POST /reg

客户端注册接口

#### 参数

```json
{
    "application_type": "web",
	"redirect_uris": ["https://127.0.0.1:3000"],
	"response_types": ["id_token token"],
	"grant_types":["implicit"],
	"token_endpoint_auth_method":"client_secret_post"
}
```

#### 响应

```json
{
    "application_type": "web",
    "grant_types": [
        "implicit"
    ],
    "id_token_signed_response_alg": "RS256",
    "require_auth_time": false,
    "response_types": [
        "id_token token"
    ],
    "subject_type": "public",
    "token_endpoint_auth_method": "client_secret_post",
    "request_uris": [],
    "client_id_issued_at": 1533610994,
    "client_id": "0d3612b8-0c85-430e-815a-70a369b99797",
    "client_secret_expires_at": 0,
    "client_secret": "XLYyczWIUjvl2bDkP1eynj7rPprKlBvpU5EQn5+XdR8xe2TR/F3wlTT9JL11HboV",
    "redirect_uris": [
        "https://127.0.0.1:3000"
    ],
    "introspection_endpoint_auth_method": "client_secret_post",
    "revocation_endpoint_auth_method": "client_secret_post",
    "registration_client_uri": "http://localhost:7001/reg/0d3612b8-0c85-430e-815a-70a369b99797",
    "registration_access_token": "fFjKuyAgHNxjfXB4DHNzpHhAfqSrbm4f96eYEaf_75B"
}
```

### 获取token

> POST /token

这个示例只展示了通过`password`的授权方式获取token。其他方式的token获取方式需要详细了解下OAuth2协议。同时oidc不支持`password`授权方式，我在框架的app.js中对oidc进行了扩展。

#### 参数

```json
{
    "client_id": "ab812216-5c28-44d0-841e-59cd9bf7385d",
    "grant_type": "password",
    "username": "1",
    "password": "1",
    "client_secret": "9DLNXp1dXI4T4KLWTWyqlCKgVHMYdTKgqSXt3Mho02/VJPziD85rbdxF7/WKX27p"
}


```
#### 响应

```json
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IklxeEcyV185VTZGczB3dEVZNHFBNkhEV3dXcGFTeWtobEZUeld6MlVuYUUifQ.eyJqdGkiOiJscGlVNXR0aTRqU3JCZHdkcUpEXzgiLCJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6MzAwMCIsImlhdCI6MTUzMzYxMTIyMiwiZXhwIjoxNTMzNjE0ODIyLCJhdWQiOiJhYjgxMjIxNi01YzI4LTQ0ZDAtODQxZS01OWNkOWJmNzM4NWQifQ.lEOB3MdNsvO-M88tVYaqAZi13F7K0ij25X5h3mW4krVV_xTWECRDWWHq_UTWhso-CIBIeogDzMzwv1jaVfWZWJgNqkZWWf20XOgUEyZkP_nbsH10YjpPYRVXXorJF-dENv-RA7aUSBg6JwN0C5Lh4XTUJ7zB1Pdz7PGAAIfbnhVhUpa4iPhG5XfY7iLCnY5Xv1BP903CgZLvY8P9Mvz4cc_hpQRK4DUML8N3592F5WgeDBS2BRLycG-FjpckVCO_H8zj51vzuJNS0hWqpbQeu4lXfDbHhX1L3Y1chhHaDIq888lCuweJDrjaD3CFsKmigSlRPRiOrN2sflz-kiCRoQ",
    "expires_in": 3600,
    "token_type": "Bearer"
}
```

### 授权

> POST /auth


请求示例

http://localhost:7001/auth?scope=openid&response_type=id_token+token&client_id=b4735627-252c-480d-93aa-c635816a1e2c&nonce=odekghsaoghoashg

这个示例使用了`implicit`授权模式，该请求会打开一个认证页面，认证成功后通过重定向返回access_token和id_token。这个id_token也就是oidc在OAuth2基础之上的扩展。


//  http://localhost:7001/auth?scope=openid&response_type=code&client_id=5533b6d4-cddc-42f2-9d4e-d8d9b0b266ab&nonce=odekghsaoghoashg

### 关于OAuth2和OIDC

OAuth2中通过授权后返回一个access_token给客户端，客户端拿着这个access_token去资源服务器获取受保护的资源。通常这个access_token是jwt格式的。由于jwt的自包含特性，所以资源服务器可以获取jwt中的签名来实现对access_token验证。验证的目的就是判断这个access_token是不是资源服务器信任的授权服务器颁发的。OIDC除了返回一个access_token还会返回一个id_token，这个id_token就是认证后的产物也是OIDC的重点，它包含了认证的用户信息，它也是jwt格式的。id_token它跟access_token的区别在于id_token的产生一定要有用户（资源所有者）参与，同时id_token的受众是客户端，客户端需要通过它拿到认证用户的信息。access_token是授权后的产物，在有些OAuth2授权模式下并不会有用户（资源所有者）这个角色参与，比如客户端模式。同时access_token的受众是资源服务器。


#### 推荐一位前辈关于协议的几篇文章

http://www.cnblogs.com/linianhui/tag/OIDC/