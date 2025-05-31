models = require('../models/models')

module.exports = {

  getDB(req,res) {
    models.testDB(req)
    .then((results) => {
      res.send(results)
    });
  },
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
    console.log('HERE IS REQ BODY', req.body)
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
    console.log('req here', req)
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
  // INVENTTORY
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
  },
  newInventory(req,res) {
    models.newInventory(req.body)
    .then((results) => {
      res.send(results)
    })
  }
}