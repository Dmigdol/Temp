require ('dotenv').config();
const fs = require("fs/promises");
const express =  require("express");
const createClient = require('@supabase/supabase-js')
const supabaseClient = require('@supabase/supabase-js')
const cors = require("cors");
const router = require("./routes/router")

const testDB = require('./testDB')



// client.query('select * from inventory',(err, res) => {
//   if(!err){
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
// })


const app = express();


app.use(cors());
app.use(express.json());

app.use('/', router)

// app.get('/test', (req, res) => {
//   testDB.testDB()
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })




// app.get("/api", (req, res) => {
//   res.send("API is working")
// })

// app.patch("/update", (req, res) => {
//   res.post
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('API server is running ...'))

