const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const auth = require('http-auth');
const { body, validationResult } = require('express-validator/check');

const router = express.Router();
const CommentModel = mongoose.model('comments');
const VideoModel = mongoose.model('videos');

router.get('/', (req, res) => {
  res.render('index', { title: 'Index page' });
});

router.get('/videos',  (req, res) => {
  VideoModel.findOne()
  .then((videos) => {
    console.log(videos)
    res.render('videos', { title: 'Listing videos', videos });
  })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});



router.get('/comments',  (req, res) => {
  //CommentModel.find()
  CommentModel.find({annotation_group_id: 30 },function(err,data){
    if(err){
      console.log(err)
    }
    console.log(data)
  })
  .then((comments) => {
    console.log(comments)
    res.render('comments', { title: 'Listing comments', comments });
  })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});





module.exports = router;
