const db = require('../supabase');


module.exports = {
  async getHistory(id) {
    const {data, error} = await db
      .from('quotes')
      .select(`*, employee (*), customer (*)`)
      .eq('employee_id', id)
      return(data);
  },
  async insertQuote(payload) {
    items = payload.items;
    data = payload.data;
    newDate = new Date().toLocaleDateString('en-CA');
    const {error} = await db
      .from('quotes')
      .insert({
        id: data.id,
        created_at: newDate,
        employee_id: data.employee_id,
        status: 'Pending',
        total_price: 0,
        customer_id: data.customer_id,
        items: items
      })
  },
  async deleteQuote(payload) {
    const response = await db
    .from('quotes')
    .delete()
    .eq('id', payload.id)
  },
  async updateQuote(payload) {
    items = payload.items;
    data = payload.data;
    newDate = new Date().toLocaleDateString('en-CA');
    console.log('payload', payload);
    const {error} = await db
      .from('quotes')
      .update({
        total_price: 0,
        items: items
      })
      .eq('id', data.id)
  }
}