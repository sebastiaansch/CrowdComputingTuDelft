const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  _id: {
    type: String,
    trim: true,
  },
  cid: {
    type: String,
    trim: true,
  },
  text: {
    type: String,
    trim: true,
  },
  annotation_group_id: {
    type: Number,
    trim: true,
  },
  video_id: {
    type: String,
    trim: true,
  },
  category_annotations: {
    type: {},
    trim: true,
  },
  opinion_annotations: {
    type: {},
    trim: true,
  },
  joke_annotations: {
    type: {},
    trim: true,
  },
 

});

module.exports = mongoose.model('comments', commentSchema);
