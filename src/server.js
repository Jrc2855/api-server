'use strict';

//-----Dependencies-----//
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3002;

//-----Routers-----//
let birdsRouter = require('./routes/birds');
let catsRouter = require('./routes/cats');

//-----app.uses-----//
app.use(express.json());
app.use(birdsRouter);
app.use(catsRouter);


//-----Base Endpoint-----//
app.get('/', (req, res, next) => {
  res.status(200).send('Base Proof of life');
});

let start = () => {
  app.listen(PORT, () => console.log('Server is running on port #:', PORT))
};

//-----Export-----//
module.exports ={
  start,
  app,
};