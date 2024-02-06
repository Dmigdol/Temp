const db = require('../database/countries');

module.exports = {
  async getCountries() {
    console.log('****MODEL FUNCTIONING****')
    const {data, error} = await db
      .from('countries')
      .select('*')
      return(data);
  },
};