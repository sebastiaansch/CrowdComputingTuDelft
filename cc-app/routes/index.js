const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const auth = require('http-auth');
const { body, validationResult } = require('express-validator/check');

const router = express();
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
const CommentModel = mongoose.model('comments');
const VideoModel = mongoose.model('videos');

router.get('/', (req, res) => {
  res.render('index', { title: 'Index page' });
});

router.get('/videosRelevance',  (req, res) => { 
  //search by some random value to get few videos
  VideoModel.find({video_views: 43874 },function(err,data){
    if(err){
      console.log(err)
    }
    //console.log(data)
  })
  .then((videos) => {
    //console.log(videos)
    res.render('videos', { title: 'Listing videos', videos });
  })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});



router.get('/commentsCateg',  (req, res) => {
  //CommentModel.find()
  CommentModel.find({annotation_group_id: 30 },function(err,data){
    if(err){
      console.log(err)
    }
    //console.log(data)
  })
  .then((comments) => {
    //console.log(comments)
    res.render('comments', { title: 'Listing comments', comments });
  })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.post('/commentsCateg', (req, res) => {
  var data = req.body
 
  for(count=1;count<11;count++){
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      console.log('uppfæra')
       
      CommentModel.findOneAndUpdate({cid: id}, {annotation1: value},function(err,data) {
        console.log("Hello there!!");
        console.log(data)
      }) 
      
    }
   
  }
  res.render('./', {
    title: 'index page',
  });


})

router.post('/videos', (req, res) => {
 
  console.log(res.body)
  console.log(req.body)
  console.log('hallo post')

  res.render('./', {
    title: 'index page',
  });
 
})


module.exports = router;
