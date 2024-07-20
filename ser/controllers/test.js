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
  updateQuote(req, res) {
    console.log('Update::', req.query)
    const payload = req.query;
    models.updateQuote(payload)
      .then((results) => {
        console.log(results)
        res.send(results);
      })
  },
  createQuote(req, res) {
    console.log(req.query)
    const payload = req.query;
    models.createQuote(payload)
      .then((results) => {
        console.log(results)
        res.send(results);
      })
  },
}