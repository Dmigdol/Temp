const db = require('../database/countries');

module.exports = {
  async getQuotes(id) {
    const {data, error} = await db
      .from('quotes')
      .select(`*, employee (*), customer (*)`)
      .eq('employee_id', id)
    console.log('here', data)
      return(data);
  },
  async getOrders(id) {
    const {data, error} = await db
      .from('orders')
      .select('*, employee (*)')
      .eq('employee_id', id)
      return(data);
  },
  async getAll(id) {
    const temp = await {}
      temp.orders = await module.exports.getOrders(id)
      temp.quotes = await module.exports.getQuotes(id)
      return temp
  }
};