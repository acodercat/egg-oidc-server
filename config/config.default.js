'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533268350746_7404';

  // add your config here
  config.middleware = [];


  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(',')
  }

  config.oidcProvider = {
    formats: {
      RefreshToken: 'jwt',
      ClientCredentials: 'jwt',
    },
    // claims: {
    //   name: ['username'],
    // },
    keystore: {
      "keys": [
        {
          "kty": "EC",
          "kid": "wJRLfXnOWtrOQgc3y2Z_Qq53PvEUGTY9zhVHryU48Ac",
          "crv": "P-256",
          "x": "OOdt5S_4DwjjEdGYID0av6tILK-cGvfObYv1i8TvvzM",
          "y": "CWu7d7tj4dnRzl-n29ra6nSj7dkLryp8dOP-JxY7xuE",
          "d": "cA19TSZbaHKNQAPJ9CR_KCfdbTVZMZr-89covbrb_98"
        },
        {
          "kty": "EC",
          "kid": "TJE7uIRQIZkkdw0qg0sN92m7G7QG9VWeJA1qWD2Nb8g",
          "crv": "P-384",
          "x": "mhoaGnjSGvOHmvZFJR6V6EMHDCNAQu7zDb17ZOFtZ1hRHbFzSK5fpUakR2Ywt2Qe",
          "y": "vJ2ZVGRqENT98iMrPMiFlC9ABpwfjXF7RuDR09MdKQusZo6odVfTFQh_7ryxOS-P",
          "d": "lQvnrVRx2_eILUd0EI35vZR0ZliGYYtkxQQZblQENiHOFYbm0V_BfY9J9F-wo3CL"
        },
        {
          "kty": "EC",
          "kid": "SeoONJULS0MZFBAysz3Nsnkk1bSd6_VvbVAQCkPQEtw",
          "crv": "P-521",
          "x": "AK1lsOj-gYdhY4R9XVa6L0MCwpfQXZcEnX-76URJy_FbmdITz0eAGwO8FCo2-kpjnv2kyyiQDu_hSTha-1fdkRP_",
          "y": "AINgAoqRgnpJJ8eAS7U4AdGDgZ5JqtuGxwM2QBzDY4ySyOz6VDdTLBWW8hnI5Mq4Ieyco2HLS5jwVjlB-ixD2D2l",
          "d": "AZv2rYDBbisxdqu_qLLVlJEzFNU7VgueWmoPoVnQMPf9eES62tLCenwC_92vHLf-MU6AMVtCpiPmqylMrOcGxGWd"
        },
        {
          "kty": "RSA",
          "kid": "IqxG2W_9U6Fs0wtEY4qA6HDWwWpaSykhlFTzWz2UnaE",
          "e": "AQAB",
          "n": "pExddw1_kLsKQ--9G26My0Uyq7bGjvpXnFLztmfG6P3XNDriaMoq2hwz-oi8Iavyla9d9AztlUjNi11qJsGTq0awifPa-4fYDUe4BoMrsNHcXCLpd78nX9D8_fyb00q-CYDN58Aj6ux52UlH8s3xX714c5R3K_hTnP2fRDB2FMiMUJ_A9WVdYojz3kxBSo9ygMOyJmFzo47MUYUod-N3o5pgmcQb76qBJE8MctAB4j_RN6GIhoja7oSKFG9zUl5eHjUGiJiseAYAoReefgjTGoPD3fINis1jvOZZBGIj9TcZGL-uF3JmzP05rF8m7aqjLxwOsa6P2KRf03pggUQdpQ",
          "d": "gkTWWr4GJkBXPFSK8YQu-EDukz4Bo34VFyqieD9CdJxIFO6XdBTP804nXH8sA9qtJkf8y7OwcQxfhR_VOdOEfWo4Mbl7KLKl-Kmj3O4GJ1XOTfOUf9C9rHgtEElJWDfMBAbvu9AZ6nwDhOhYtsjZmFrHdYUDFIb57OEfddai2Yh_szfb3nHJPgW7_8cvWrubpBUOsJnSMKXfNBJvIhwtPTuFVPbckE8NQ8pzmzqDb71-lnfUDGAhylg1dKtCticsIkOQNxzuDAsSpqeQ5c2EYpKqqaV3RE-sFMBzdYmUUXqSPxZERW79Jy4_nmAwvYR4uJL_jaHoeuBpSpE98RN95Q",
          "p": "3NpdfsmnHaecUNOxNqZ3iZEzknTRT9kh4eW8MKRD_ab9_Iug5zMOMOeScI4G5QyAbWttAzYbszxlmYxVdx-cJ8QSJmjq-FkfXTc6Pet0jLhCAE-tZmINtgw0y5RAWjAYDDRCJaND_VPoMM-r_rg4Ff8ROGZRB1TCttpgnKKGprc",
          "q": "vnHwvOaAck6yg1EPTacb0JmZvJeXrvWd0pdoIpTvgxWKZClFrfvqBcNMQt82ieIzzakG_d3bmnGCPF8_K0tbjkKHkAdqFeEHAy2DV1pmOuyUjc9jGYQfU34EIDsDbSUhje5nsRR03n0C-EayObHVMLw1vLUhw27nlf20UcELooM",
          "dp": "hqeFFcaxY71L62QGyoFYpMGpJgSfkgWbSPYfdbDR25eziAVCB3TzlBG9EW8m-QRUUWKMRsb4wKF0eNg9S7I0LXK4dj7F9MGyA82mbxZeK2Y0p6fs212xamuqzO0JB3QHVXmPUw9mZtB_4zLbdSSw3Yh04WRQxx2A0qf2-8mEO6U",
          "dq": "STVxrpwJGmfoNZSuhlJL3fd94sJ_e7FNdwve6xRHsiNQrMo0z_n77zUxFq_Jvl1nPpLQbjyf05H4145hsRnp2xj2FcbT4A8969nOGIFWtSYGwTDMzp08kZLqsR0eZxGUAYR49diASJrTzm8WyhjzdCWVnrIehYsXmVAKxjaoa1M",
          "qi": "OX1kyiVAfTSWzp1inLNeTPp2VPiD48w_V8EMUGqQ6hcsgggB8KthezD0Ojobe-VHRMJ5zYlxfIHMI6OOPNGRKVfTwbRqmpPzicO1drbrCofG0E8mfcp_hbBnOqbm2fw_ufuTKVtppggGUDf9iR52OSIeqi7hzcSA7BcqgBv8WQA"
        }
      ]
    },
    clients: [
      {
        application_type: 'native',
        client_id: 'test',
        client_secret: 'test',
        redirect_uris: ['http://localhost'],
        response_types: ['id_token token'],
        grant_types: ['implicit'],
        scope: "openid"
      }
    ],
    features: {
      clientCredentials: true,
      claimsParameter: true
    },
    scopes: ['openid'],
    // interactionUrl(ctx) {
    //   return `/interaction/${ctx.oidc.uuid}`;
    // },
    // cookies: {
    //   keys : ['1212']
    // },
    // async findById(ctx, sub) {
    //   console.log('id11111', sub);
    //   return {
    //     accountId: 1,
    //     async claims(use, scope) {
    //       return {sub};
    //     },
    //   };
    // }
  }

  config.security = {
    domainWhiteList: [''],
    csrf: false,
  };

  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'oidc',
    host: '192.168.1.193',
    port: '5432',
    username: 'postgres',
    password: '',
    define: {
      underscored: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
      freezeTableName: true,
      // paranoid: true
    },
  };

  return config;
};
