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
  },
  async updateQuote(payload) {
    console.log(payload)
    const {data, error} = await db
      .from('quotes')
      .update(
        {
          items : payload.items,
          status : payload.status
        }
      )
      .eq('id', payload.id)
      return(data);
  },
  async createQuote(payload) {
    const {data, error} = await db
      .from('quotes')
      .insert(
        {
          quote_id : payload.quote_id,
          employee_id : payload.employee_id,
          customer_id : payload.customer_id,
          status : payload.status,
          total_price : 0,
          customer_name : payload.customer_name
        }
      )
      .select()
      return(data);
  }
};