const router = require('express').Router();
const controller = require('../controllers/test');

router.get('/test', controller.getAll);
router.get('/landing/:id', controller.getQuotes);
router.get('/order', controller.getOrders);
router.put('/newQuote', controller.createQuote);
router.patch('/updateQuote', controller.updateQuote)


module.exports = router;