const db = require('../supabase');


module.exports = {
  async getHistory(id) {
    const {data, error} = await db
      .from('quotes')
      .select(`*, employee (*), customer (*)`)
      .eq('employee_id', id)
      return(data);
  },
  async getUsers() {
    const {data, error} = await db
      .from('customer')
      .select('*')
      return(data);
  },
  async insertQuote(payload) {
    items = payload.items;
    data = payload.data;
    newDate = new Date().toLocaleDateString('en-CA');
    const {error} = await db
      .from('quotes')
      .insert({
        created_at: newDate,
        employee_id: data.id,
        status: 'Pending',
        total_price: 0,
        customer_id: data.customer.id,
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
  },
  async newDraft(payload) {
    items = payload.items;
    data = payload.data;
    newDate = new Date().toLocaleDateString('en-CA');
    const {error} = await db
      .from('drafts')
      .insert({
        id: data.id,
        created_at: newDate,
        employee_id: data.employee_id,
        status: 'Pending',
        total_price: 0,
        customer_id: data.customer_id,
        items: items,
        customer_name: data.customer_name
      })
  },
  async updateCustomer(payload) {
    id = payload.id;
    data = payload.data;
    const {error} = await db
      .from('customer')
      .update({
        shipping_address: data.shipping_address,
        phone: data.phone,
        email: data.email
      })
      .eq('id', id)
  },
  async getInventory() {
    const {data, error} = await db
    .from('inventory')
    .select('*')
    return(data);
  },
  async updateInventory(payload) {
    id = payload.id;
    data = payload.data;
    const {error} = await db
      .from('inventory')
      .update({
        serial: data.serial,
        amount: data.amount,
        ppu: data.ppu
      })
      .eq('id', id)
  }
}