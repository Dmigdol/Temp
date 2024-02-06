const router = require('express').Router();
const controller = require('../controllers/test');

router.get('/test', controller.getCountries);

module.exports = router;