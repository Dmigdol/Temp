const models = require('../models/upStream.js')

module.exports = {
  createQuote(req, res) {
    const payload = req.params.payload;
    models.createQuote(payload)
      .then((results) => {
        res.send(results);
      })
  }
}