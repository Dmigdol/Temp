const router = require('express').Router();
const controller = require('../controllers/test');

router.get('/test', controller.getAll);
router.get('/quote', controller.getCountries);
router.get('/order', controller.getOrders);


module.exports = router;