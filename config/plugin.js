'use strict';

// had enabled by egg
// exports.static = true;

exports.oidcProvider = {
  enable: true,
  package: 'egg-oidc-provider',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};


exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

exports.jwt = {
  enable: true,
  package: "egg-jwt"
};