const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  _id: {
    type: String,
    trim: true,
  },
  video_id: {
    type: String,
    trim: true,
  },
  video_query: {
    type: String,
    trim: true,
  },
  video_description: {
    type: String,
    trim: true,
  },
  annotation_group_id: {
    type: Number,
    trim: true,
  },
  relevant_annotations: {
    type: {},
    trim: true
  },
  live_annotations: {
    type: {},
    trim: true
  },
});

module.exports = mongoose.model('videos', videoSchema);
