require ('dotenv').config();
const fs = require("fs/promises");
const express =  require("express");
const createClient = require('@supabase/supabase-js')
const supabaseClient = require('@supabase/supabase-js')
const cors = require("cors");
const router = require("./routes/router")


const app = express();


app.use(cors());
app.use(express.json());

app.use('/', router)

// app.get("/api", (req, res) => {
//   res.send("API is working")
// })

// app.patch("/update", (req, res) => {
//   res.post
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('API server is running ...'))