'use strict';



module.exports = () => {
  return async function (ctx, next) {
    console.log('auth');
    await next();
  }
}