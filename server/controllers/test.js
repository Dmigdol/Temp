const models = require('../models/test');

module.exports = {
  getCountries(req, res) {
    const countries = req.params.countries;
    models.getCountries()
      .then((results) => {
        res.send(results);
      });
  },
  getOrders(req, res) {
    const orders = req.params.orders;
    models.getOrders()
      .then(results => res.send(results));
  },
  getAll(req, res) {
    const orders = req.params.orders;
    models.getAll()
      .then(results => res.send(results));
  },
}