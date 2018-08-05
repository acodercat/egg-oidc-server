'use strict';


module.exports = app => {

  return class ClientAdapter {

    constructor(){
      this.model = app.model.Client;
    }

    async findById(id) {
      const found = await this.model.findById(id);
      if (!found) return;
      return { ...found.data };
    }

    upsert(data) {
      const id = data.id;
      delete data.id;
      let client = this.model.build({ id, data });
      return client.save();
    }
  }
}
