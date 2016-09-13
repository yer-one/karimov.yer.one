/**
 * Videos Model
 */
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


/**
 * Attributes
 * @title:      - string
 * @uuid:       - string
 * @url:        - string
 * @text:       - string
 * @createdAt   - date
 * @updatedAt   - date
 * @publishedAt - date
 * @category    - string
 * @isActive    - boolean
 */
const VideosModel = new Schema({
  title:       String,
  uuid:        String,
  url:         String,
  text:        String,
  createdAt:   Date,
  updatedAt:   Date,
  publishedAt: Date,
  category:    String,
  isActive:    Boolean
});


mongoose.model('Videos', VideosModel);
