const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Videos = mongoose.model('Videos');
const fs = require('fs');
const _ = require('lodash');
const mimeTypes = require('../../config/videoMimeTypes');


module.exports = (app) => {
  app.use('/video', router);
};


router.get('/', (req, res, next) => {
  res.send("video controller")
});


router.post('/upload', (req, res) => {
  console.log('req.files', req.files);
  var file = req.files.file;

  if (file.mimetype !== 'video/mp4') {
    return res.json({
      message: 'Type is not mp4'
    });
  }

  fs.writeFile('uploads/test.mp4', file.data, (err, result) => {
    if (err) return res.json(err);
    res.json({
      message: 'OK'
    });
  });

});
