'use strict';


module.exports = app => {

  const parameters = ['username', 'password'];

  // For OAuth 2.0 Token Exchange you can specify allowedDuplicateParameters as ['audience', 'resource']
  const allowedDuplicateParameters = [];

  app.oidcProvider.registerGrantType('password', function (providerInstance) {
    return async (ctx, next) => {
      const account = await ctx.app.model.Account.findOne({
        where: {
          username: ctx.oidc.params.username,
          password: ctx.oidc.params.password
        }
      });

      if (account) {
        if (!account.client_ids || !(account.client_ids.indexOf(ctx.oidc.client.clientId) >= 0)) {
          ctx.body = {
            error: 'access_denied',
            error_description: 'You don\'t have permission to access',
          };
          ctx.status = 403;
        } else {
          const AccessToken = providerInstance.AccessToken;
          const at = new AccessToken({
            gty: 'password',
            accountId: account.id,
            username: "cat",
            clientId: ctx.oidc.client.clientId,
            grantId: ctx.oidc.uuid,
          });

          const accessToken = await at.save();
          const expiresIn = AccessToken.expiresIn;

          ctx.body = {
            access_token: accessToken,
            expires_in: expiresIn,
            token_type: 'Bearer',
          };

        }
      } else {
        ctx.body = {
          error: 'invalid_grant',
          error_description: 'invalid credentials provided',
        };
        ctx.status = 400;
      }

      await next();
    };
  }, parameters, allowedDuplicateParameters);


}