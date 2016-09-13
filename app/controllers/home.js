const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');


module.exports = (app) => {
  app.use('/', router);
};


router.get('/', (req, res, next) => {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});


router.get('/upload', (req, res) => {
  res.render('upload', {
    title: 'Upload'
  });
});
