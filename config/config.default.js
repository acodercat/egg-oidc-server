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


  //const jwksClient = require('jwks-rsa');
  // const client = jwksClient({
  //   strictSsl: false, // Default value
  //   jwksUri: 'http://localhost:7001/certs'
  // });
  //
  // const kid = 'zhA-H1DWOSgWQAIW7mewCYeaZLGpkgW_hXfq8jmV99I';
  // client.getSigningKey(kid, (err, key) => {
  //   const signingKey = key.publicKey || key.rsaPublicKey;
  //   console.log(signingKey);
  //   // Now I can use this to configure my Express or Hapi middleware
  // });
  config.jwt = {
    secret: "-----BEGIN RSA PUBLIC KEY-----\n" +
      "MIIBCgKCAQEAvdv73smpkrTIBSM8ka+pVXbNi7zYalm0R6WFBH4X8PQj8C7Vfdck\n" +
      "GsA6bTBseOVCTbu187/63yU2U7vqYiqwSLmkrBVAJjYMJY/XXfncxwqDWR/aa7eI\n" +
      "JSKh22H/6yz6kFyF1h/ZSk68CPAEQpvd9VFAr4VLEwD32Ag6MwymSOxmFWJyddEt\n" +
      "ttdGcXLSrHcya3RWyG5KAW3Ti+HgNC+xo/C5LgEsUgjeUq+rc8NBXZrNCY+LJ/R+\n" +
      "qtB/+5NkwlMJ/fUMBDcmZuciNOH71q7xyn0FGmGjrJXnyVJwyDiTrKRO36piMuia\n" +
      "JE2nIRJaLvhDN5M1K2VhSKPuaqUPyxLzBwIDAQAB\n" +
      "-----END RSA PUBLIC KEY-----\n"
  };

  config.oidcProvider = {
    formats: {
      RefreshToken: 'jwt',
      ClientCredentials: 'jwt',
    },
    claims: {
      accountInfo: ['basic_info', 'id', 'username'],
    },
    keystore: {
      keys:
        [{
          kty: 'RSA',
          kid: 'zhA-H1DWOSgWQAIW7mewCYeaZLGpkgW_hXfq8jmV99I',
          use: 'sig',
          alg: 'RS256',
          e: 'AQAB',
          n: 'vdv73smpkrTIBSM8ka-pVXbNi7zYalm0R6WFBH4X8PQj8C7VfdckGsA6bTBseOVCTbu187_63yU2U7vqYiqwSLmkrBVAJjYMJY_XXfncxwqDWR_aa7eIJSKh22H_6yz6kFyF1h_ZSk68CPAEQpvd9VFAr4VLEwD32Ag6MwymSOxmFWJyddEtttdGcXLSrHcya3RWyG5KAW3Ti-HgNC-xo_C5LgEsUgjeUq-rc8NBXZrNCY-LJ_R-qtB_-5NkwlMJ_fUMBDcmZuciNOH71q7xyn0FGmGjrJXnyVJwyDiTrKRO36piMuiaJE2nIRJaLvhDN5M1K2VhSKPuaqUPyxLzBw',
          d: 'kMMVDtAQvc2d3Vz6p9KaeJG3M97v3Fc9gIuSGtTSCGT-qfnryqGp48PCSNLtQlj77y07FPnCnTZQcBQOKH-IHkt-Zb9mRDxdkp5UhlEnp5Q6hlAlSJCN_FKluxLEAVswSbZiTdvG4EOcV-w6M1eJK62idrJZhcntMAlF5vq0J1DU9d6WsELyNokuOk0Gd6k9phT9RSyyDJCqw5jNyddRNjzT4aZmbjDbIr7Mp_DHrNrg6LNh7g6qP7krnk_uLT50f84KgXL70W6fa6uevOH3qSzgy_SAZlaV-2AHv7byXzZe48KR1rJ9dLL3Y3juS5ZkBPlte24LkuLBBCOBz9ZhcQ',
          p: '_mxAG1lAudQFbDwkw_XsUjMTsWndIIX7Op3mxLSOzvfPSgXzJqvdEWpQhwkwDlpVfzrSO6TkzBuzLX2AHCI6n50fR7UvWjkJtaFxvmDBs2Jlz_5NHaV7p7Tk9VZot_2f7NNDGHQIE8JWRhRi0yLXuBTiSFKae77ZAsD1xLa8__M',
          q: 'vwlGq5Yyuo5s4gdYMn0034wlkevfMMAiV74FWLILSUoynctjHaxdCV9MjG5w0K6vmUMqO_HW8UiyHCOqZtCTsDG10VgsMhXQoe-1vNPzt3BBCulqo_5RCOosKEHlu7Rh3krlwiGgs23MaAPCdq5-iy4EFKDUnXZK5TviZB032Z0',
          dp: '82nD56Z7q45y5bug_S7Su04MwEdlfVFSLCGYAIgyvUcPtmV83Xm-VoQdqSQcKw84DzLKoq-_CpxRz-rrX39MERt1KtjpBeveIzzjot3VVHeGqvlE9GE3rhr-ls7l_2oS0LTK06FnfOgIPKISbqg-NOseF02YaV4NJ3pPaLXgmws',
          dq: 'QJVWOvQQOlmkHdX1zzvdACZVHTvsvIJ4Gcm37QBkKGbZLddwrrtyyJRbQK6lnScxXlMCmDluPSwiarj0BsZE57Amk5uHdXdCjTyI6EmPf1iH5LR8xOxZYPYp74I3tHmLDKetfS_5MC_ShueeepkLVuo7nu2wc3tmXpEcPFRUaVE',
          qi: '_M21YgsRgslNsi8WCu8GRz8sksEfS7k8bMzVKCMvpmFWD5RRaQSr_FRvy-TMwdo7iWbQ0Yh3puesOtIilI1ZDj4oWOX5zJWscylwTY6Ha1h7AIBMuCFXGDpGP6CzjqnQIEF0dgVgPXmfqVsf0aoqbuZeV_B6GbhlzlYvWPv_0_Y'
        }]
    },
    clients: [
      {
        application_type: 'native',
        client_id: 'test',
        client_secret: 'test',
        redirect_uris: ['http://localhost'],
        response_types: ['id_token token'],
        grant_types: ['implicit'],
      }
    ],
    features: {
      clientCredentials: true,
      claimsParameter: true,
      registrationManagement: true,
    },
    extraClientMetadata: {
      properties: ['name'],
      validator(key, value, metadata) {

      }
    },
    scopes: ['openid', 'name'],
    // interactionUrl(ctx) {
    //   return `/interaction/${ctx.oidc.uuid}`;
    // },
    // cookies: {
    //   keys : ['1212']
    // },
    async findById(ctx, sub) {
      const account = await ctx.app.model.Account.findById(sub, {
        include: [{
          model: ctx.app.model.AccountBasicInfo,
          attributes: ['name', 'sex', 'age', 'phone_number', 'nation', 'id_card_no', 'job_title', 'post_ids'],
          as: 'basicInfo',
          required: true
        }]
      });
      return {
        async claims(use, scope) {
          return {
            sub,
            id: account.id,
            username: account.username,
            basic_info: account.basicInfo
          };
        }
      };
    }
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
