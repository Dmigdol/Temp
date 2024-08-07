const express = require('express')
const router = express.Router()
const controllers  = require('./controller/index')

router.get('/home', controllers.getHistory)
router.post('/newQuote', controllers.insertQuote)
router.delete('/del', controllers.deleteQuote)
router.put('/update', controllers.updateQuote)
router.post('/draft', controllers.newDraft)
router.get('/users', controllers.getUsers)

module.exports = router