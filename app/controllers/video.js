const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Videos = mongoose.model('Videos');


module.exports = (app) => app.use('/video', router);


router.get('/', (req, res, next) => {
  res.render('upload', {
    title: 'Video controller'
  });
});


router.post('/upload', (req, res) => {
  console.log('Files', req.files);
  res.end();
});
