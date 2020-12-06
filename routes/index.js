var express = require('express');
var router = express.Router();
const db = require('../database/database')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const result = await db.getdata();
  // console.log(result.rows);
  res.render('index', { resultData: result.rows });
});

router.get('/toprecover',async function(req, res, next) {
  const result = await db.getrecover();
  // console.log(result.rows);
  res.render('toprecover', { resultData: result.rows });
});

router.get('/topdeath',async function(req, res, next) {
  const result = await db.getdead();
  // console.log(result.rows);
  res.render('topdeath', { resultData: result.rows });
});

router.get('/topconfirm',async function(req, res, next) {
  const result = await db.gettopcon();
  // console.log(result.rows);
  res.render('topconfirm', { resultData: result.rows });
});

router.get('/table',async function(req, res, next) {
  const result = await db.gettable();
  // console.log(result.rows);
  res.render('table', { resultData: result.rows });
});

router.get('/dataCountry/:country',async function(req, res, next) {
  var country = req.params.country;
  const result = await db.srcCountry(country);
  console.log(result.rows);
  res.render('dataCountry', { resultData: result.rows });
});

module.exports = router;
