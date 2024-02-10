const models = require('../models/test');

module.exports = {
  getCountries(req, res) {
    console.log('******REQ PARAMS********', req.params);
    const countries = req.params.countries;
    models.getCountries()
      .then((results) => {
        console.log('*****RESULTS******', results);
        res.send(results);
      });
  }
}