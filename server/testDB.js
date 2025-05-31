const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.UN,
  host: process.env.HOST,
  database: process.env.DBNAME,
  password: process.env.PW,
  port: 5432,
})

const testDB = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM inventory", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
}


module.exports= {
  testDB
}