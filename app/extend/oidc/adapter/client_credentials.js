'use strict';


module.exports = app => {

  return class AccessTokenAdapter {

    constructor(){
      this.model = app.model.ClientCredentials;
    }

    async findById(id) {
      const found = await this.model.findById(id);
      if (!found) return;
      return { ...found.data };
    }

    upsert(data) {
      const id = data.id;
      const expires_at = data.expiresAt;
      delete data.id;
      delete data.expiresAt;
      let accessToken = this.model.build({ id, expires_at, data });
      return accessToken.save();
    }
  }

}
