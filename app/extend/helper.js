const crypto = require('crypto');

module.exports = {
  md5(password) {
  	let md5 = crypto.createHash('md5');
		const encryptedPassword = md5.update(password).digest("hex");
		return encryptedPassword;
  },

  paginationReponse(data, pagination) {
    const paginationMeta = { total: data.count, current: pagination.page, per_page: pagination.perPage };
    return {
      items: data.rows,
      meta: {
        pagination: paginationMeta
      }
    };
	}
};