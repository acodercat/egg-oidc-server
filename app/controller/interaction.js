'use strict';

const Controller = require('egg').Controller;
const querystring = require('querystring');

class InteractionController extends Controller {

  async grant(ctx) {
    const details = await ctx.app.oidcProvider.interactionDetails(ctx.req);
    const client = await ctx.app.oidcProvider.Client.find(details.params.client_id);
    if (details.interaction.error === 'login_required') {
      await ctx.render('login', {
        client,
        details,
        title: '授权',
        debug: querystring.stringify(details.params, ',<br/>', ' = ', {
          encodeURIComponent: value => value,
        }),
        interaction: querystring.stringify(details.interaction, ',<br/>', ' = ', {
          encodeURIComponent: value => value,
        }),
      });
    } else {
      await ctx.render('interaction', {
        client,
        details,
        title: 'Authorize',
        debug: querystring.stringify(details.params, ',<br/>', ' = ', {
          encodeURIComponent: value => value,
        }),
        interaction: querystring.stringify(details.interaction, ',<br/>', ' = ', {
          encodeURIComponent: value => value,
        }),
      });
    }
  }

  async confirm(ctx) {
    const result = { consent: { scope:"name" } };
    await ctx.app.oidcProvider.interactionFinished(ctx.req, ctx.res, result);
  }

  async login(ctx) {
    const account = await ctx.app.model.Account.findOne({
      where: {
        username: ctx.request.body.login,
        password: ctx.request.body.password
      }
    });

    if (account && account.client_ids.indexOf(ctx.request.body.clientId) >= 0) {
      const result = {
        login: {
          account: account.id,
          acr: 'urn:mace:incommon:iap:bronze',
          amr: ['pwd'],
          remember: !!ctx.request.body.remember,
          ts: Math.floor(Date.now() / 1000),
        },
        consent: {
          scope:"name"
        },
      };
      await ctx.app.oidcProvider.interactionFinished(ctx.req, ctx.res, result);
    }

  }
}

module.exports = InteractionController;
