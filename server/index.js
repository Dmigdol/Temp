require ('dotenv').config();
const express = require('express');
const router = require('./routes');
const createClient = require('@supabase/supabase-js')
const supabaseClient = require('@supabase/supabase-js')
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.static('build'));


app.use('/api', router.test);


// ROUTES

// app.use('/api/test', router.test);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server available at http://localhost:${PORT}`));