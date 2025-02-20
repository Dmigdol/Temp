models = require('../models/index')

module.exports = {
  getHistory(req, res) {
    models.getHistory(req.query.id)
      .then((results) => {
        res.send(results)
      });
  },
  getUsers(req,res) {
    models.getUsers()
    .then((results) => {
      res.send(results)
    });
  },
  insertQuote(req, res) {
    console.log(req)
    models.insertQuote(req.body)
    .then((results) => {
      res.send(results)
    })
  },
  newDraft(req, res) {
    console.log(req)
    models.newDraft(req.body)
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
  },
  updateQuote(req, res) {
    console.log(req)
    models.updateQuote(req.body)
    .then((results) => {
      res.send(results)
    })
  },
  updateCustomer(req, res) {
    console.log(req)
    models.updateCustomer(req.body)
    .then((results) => {
      res.send(results)
    })
  },
  getInventory(req, res) {
    models.getInventory()
    .then((results) => {
      res.send(results)
    });
  },
  updateInventory(req, res) {
    console.log(req)
    models.updateInventory(req.body)
    .then((results) => {
      res.send(results)
    })
  }
}