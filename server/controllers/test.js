const models = require('../models/test');

module.exports = {
  getQuotes(req, res) {
    const quotes = req.params.quotes;
    models.getQuotes(id)
      .then((results) => {
        res.send(results);
      });
  },
  getOrders(req, res) {
    const orders = req.params.orders;
    models.getOrders(id)
      .then(results => res.send(results));
  },
  getAll(req, res) {
    const id = req.query.id;
    console.log('Quote:: ', req.query.id)
    models.getAll(id)
      .then(results => res.send(results));
  },
}