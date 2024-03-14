const db = require('../database/countries');

module.exports = {
  async getCountries() {
    const {data, error} = await db
      .from('countries')
      .select('*')
      return(data);
  },

  async getOrders() {
    const {data, error} = await db
      .from('orders')
      .select('*')
      return(data);
  },
  async getAll() {
    const temp = await {}
      temp.orders = await module.exports.getOrders()
      temp.quotes = await module.exports.getCountries()
      return temp
  }
};