const { Client } = require('pg')

const client = new Client({
  user: process.env.UN,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.PW,
  port: 5432,
})

client.connect()
.then(() =>{console.log('connected to pg')})
.catch(() => {
  console.log('cant connect to pg')
})

module.exports = {
  async testDB() {
    const result = await client.query('select * from quotes')
    return (result.rows)
  },
  // async getHistory(id) {
  //   const {data, error} = await db
  //     .from('quotes')
  //     .select(`*`)
  //     .eq('employee_id', id)
  //     return(data);
  // },
  async getUsers() {
    const result = await client.query('select * from customer')
      return(result.rows);
  },
  async insertQuote(payload) {
    items = JSON.stringify(payload.items);
    data = payload.data;
    newDate = new Date().toLocaleDateString('en-CA');
    const text = `INSERT INTO quotes(
      created_at,
      employee_id,
      status,
      total_price,
      customer_id,
      items,
      company_name
    ) VALUES(
      $1,$2,$3,$4,$5,$6,$7
    )`
    const values = [newDate, data.id,'Pending', 0, data.customer.id, items, data.customer.company_name]
    const result = await client.query(text, values)
  },
  async deleteQuote(payload) {
    const text = `DELETE FROM quotes WHERE quote_id = $1`
    const values =[payload.quote_id]
    console.log('payload quote_id ', payload)
    const result = await client.query(text, values)
  },
  // async updateQuote(payload) {
  //   items = payload.items;
  //   data = payload.data;
  //   newDate = new Date().toLocaleDateString('en-CA');
  //   console.log('payload', payload);
  //   const {error} = await db
  //     .from('quotes')
  //     .update({
  //       total_price: 0,
  //       items: items
  //     })
  //     .eq('id', data.id)
  // },
  // async newDraft(payload) {
  //   items = payload.items;
  //   data = payload.data;
  //   newDate = new Date().toLocaleDateString('en-CA');
  //   const {error} = await db
  //     .from('drafts')
  //     .insert({
  //       id: data.id,
  //       created_at: newDate,
  //       employee_id: data.employee_id,
  //       status: 'Pending',
  //       total_price: 0,
  //       customer_id: data.customer_id,
  //       items: items,
  //       customer_name: data.customer_name
  //     })
  // },
  // async updateCustomer(payload) {
  //   id = payload.id;
  //   data = payload.data;
  //   const {error} = await db
  //     .from('customer')
  //     .update({
  //       shipping_address: data.shipping_address,
  //       phone: data.phone,
  //       email: data.email
  //     })
  //     .eq('id', id)
  // },
  // INVENTORY
  async getInventory() {
    const result = await client.query('select * from inventory')
    return(result.rows);
  },
  async updateInventory(payload) {
    id = payload.id;
    data = payload.data;
    console.log('hereeeeeeeee ', id)
    const text = `UPDATE inventory SET
    amount = $1,
    serial = $2,
    ppu = $3
    WHERE id = $4`
  const values = [data.amount,data.serial,data.ppu,id]
  const result = await client.query(text, values)
  },
  // async updateInventory(payload) {
  //   id = payload.id;
  //   data = payload.data;
  //   const {error} = await db
  //     .from('inventory')
  //     .update({
  //       serial: data.serial,
  //       amount: data.amount,
  //       ppu: data.ppu
  //     })
  //     .eq('id', id)
  // },
  // async newInventory(payload) {
  //   id = payload.id;
  //   inputs = payload.inputs;
  //   const {error} = await db
  //   .from('inventory')
  //   .insert({
  //     id: id,
  //     name: inputs.name,
  //     amount: inputs.amount,
  //     serial: inputs.serial,
  //     ppu: inputs.ppu
  //   })
  // }
}