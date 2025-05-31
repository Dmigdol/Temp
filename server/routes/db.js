const { Client } = require('pg')

const client = new Client({
  user: process.env.UN,
  host: process.env.HOST,
  database: process.env.DBNAME,
  password: process.env.PW,
  port: 5432,
})

client.connect()
.then(() =>{console.log('connected to pg')})
.catch(() => {
  console.log('cant connect to pg')
})

module.export = client