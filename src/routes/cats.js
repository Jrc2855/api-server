'use strict';

let express = require('express');
let { catsModel } = require('../models/cats');
let router = express.Router();

router.get('/cats', async (req, res, next) => {
  let cats = await catsModel.findAll();
  res.status(200).send(cats);
  // SEND ALL THE CATS!
});

module.exports = router;