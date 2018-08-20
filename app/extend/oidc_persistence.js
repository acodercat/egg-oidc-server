'use strict';

//   'Session',
//   'AccessToken',
//   'AuthorizationCode',
//   'RefreshToken',
//   'DeviceCode',
//   'ClientCredentials',
//   'Client',
//   'InitialAccessToken',
//   'RegistrationAccessToken'


module.exports = app => {

  const accessToken = {
    upsert(data) {
      const id = data.id;
      const grant_id = data.grantId;
      const expires_at = data.expiresAt;
      delete data.id;
      delete data.grantId;
      delete data.expiresAt;
      let accessToken =  app.model.AccessToken.build({ id, grant_id, expires_at, data });
      return accessToken.save();
    },
    async findById (id) {
      const found = await app.model.AccessToken.findById(id);
      if (!found) return;
      return { ...found.data };
    },
    destroy (id) {
      return app.model.AccessToken.destroy({ where: { id } });
    }
  };

  const client = {
    upsert(data) {
      const id = data.id;
      const name = data.name || '';
      const client_secret = data.client_secret || '';
      delete data.id;
      delete data.name;
      delete data.client_secret;
      let client = app.model.Client.build({ id, data, name, client_secret });
      return client.save();
    },
    async findById (id) {
      const client = await app.model.Client.findById(id);
      if (!client) return;
      console.log({ ...client.data, client_secret: client.client_secret });
      return { ...client.data, client_secret: client.client_secret };
    }
  };

  const clientCredentials = {
    upsert(data) {
      const id = data.id;
      const expires_at = data.expiresAt;
      delete data.id;
      delete data.expiresAt;
      let accessToken = app.model.ClientCredentials.build({ id, expires_at, data });
      return accessToken.save();
    },
    async findById (id) {
      const found = await app.model.ClientCredentials.findById(id);
      if (!found) return;
      return { ...found.data };
    }
  };


  return {
    accessToken,
    client,
    clientCredentials
  };

}