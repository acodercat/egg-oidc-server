'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.get('/interaction/:grant',  controller.interaction.grant);
  router.post('/interaction/:grant/login',  controller.interaction.login);
  router.post('/interaction/:grant/confirm',  controller.interaction.confirm);
  router.post('/account',  app.jwt, controller.account.index);
};
