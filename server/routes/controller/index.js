models = require('../models/index')

module.exports = {
  getHistory(req, res) {
    models.getHistory(req.query.id)
      .then((results) => {
        res.send(results)
      });
  },
  upsertQuote(req, res) {
    console.log(req)
    models.upsertQuote(req.body)
    .then((results) => {
      res.send(results)
    })
  },
  deleteQuote(req, res) {
    console.log(req)
    models.deleteQuote(req.query)
    .then((results) => {
      res.send(results)
    })
  }
}