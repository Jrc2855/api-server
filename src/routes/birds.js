'use strict';

let express = require('express');
let { birdsModel } = require('../models/birds');
let router = express.Router();

router.get('/birds', async (req, res, next) => {
  let birds = await birdsModel.findAll();
  res.status(200).send(birds);
});

module.exports = router;