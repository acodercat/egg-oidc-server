'use strict';

module.exports = (per_page) => {
  return async function (ctx, next) {
    let pagination = {
      perPage: ctx.request.query.per_page || per_page,
      page: ctx.request.query.page || 1,

    };
    ctx.pagination = pagination;
    await next();
  }
}