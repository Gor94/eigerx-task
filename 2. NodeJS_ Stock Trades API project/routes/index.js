var express = require('express');
const { getTradeById, getAllTrades, createTrade, handleInvalidMethods } = require('../controllers/trades');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});


router.get('/trades/:id',  getTradeById);

router.post('/trades', createTrade);
router.get('/trades', getAllTrades);
router.get('/trades/:id', getTradeById);
router.all('/trades/:id', handleInvalidMethods)


module.exports = router;
