'use strict';


module.exports = app => {

  return class AccessTokenAdapter {

    constructor(){
      this.model = app.model.AccessToken;
    }

    async findById(id) {
      const found = await this.model.findById(id);
      if (!found) return;
      return { ...found.data };
    }

    upsert(data) {
      const id = data.id;
      const grant_id = data.grantId;
      const expires_at = data.expiresAt;
      delete data.id;
      delete data.grantId;
      delete data.expiresAt;
      let accessToken = this.model.build({ id, grant_id, expires_at, data });
      return accessToken.save();
    }

    destroy(id) {
      return this.model.destroy({ where: { id } });
    }
  }
}
