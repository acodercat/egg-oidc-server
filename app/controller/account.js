'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {

  async index(ctx) {

    ctx.body = ctx.state.user;
  }

}

module.exports = AccountController;
