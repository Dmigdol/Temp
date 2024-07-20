const createClient = require('@supabase/supabase-js')
const supabaseClient = require('@supabase/supabase-js')

const project = process.env.URL
const apiKey = process.env.APIKEY

const supabase = supabaseClient.createClient(project, apiKey);

module.exports = supabase;