const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const auth = require('http-auth');
const await = require('await')
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



router.get('/commentscateg',  (req, res) => {
  //CommentModel.find()
  CommentModel.find({annotation_group_id: 40 },function(err,data){
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

router.post('/commentscateg', (req, res) => {
  console.log("í post aðgerð")
  var data = req.body
    console.log(data)
 
  for(count=1;count<11;count++){
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1][1] +" & "+data['chosen'][count][1][2]+" & "+data['chosen'][count][1][3]+" & "+data['chosen'][count][1][4]
    console.log('Value: '+value)
    console.log(data['chosen'][count][1]=="[]" )
    if (value != "undefined & undefined & undefined & undefined"){
      console.log('uppfæra')
      noAnnotations=0
      CommentModel.findOne({cid: id}, function (err, comment) {
        if(err){
          console.log('error')
        } else{
          noAnnotations=Object.keys(comment.category_annotations).length
          newField ="category_annotations."+String(noAnnotations+1)
          var myquery =  {$set:{[newField]:value} }
         
          CommentModel.findOneAndUpdate({cid: id}, myquery ,function(err,data) {
            if(err){
            console.log('error')
          } else{
            console.log(data)
          }
          }) 
        }
      });
    }
  }
  res.render('./', {
    title: 'index page',
  });


})

router.get('/commentsjoke',  (req, res) => {
  //CommentModel.find()
  CommentModel.find({annotation_group_id: 40 },function(err,data){
    if(err){
      console.log(err)
    }
    //console.log(data)
  })
  .then((comments) => {
    //console.log(comments)
    res.render('commentsJoke', { title: 'Listing comments', comments });
  })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.post('/commentsjoke', (req, res) => {
  console.log("joke - post")
  var data = req.body
    console.log(data)
 
  for(count=1;count<11;count++){
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      console.log('uppfæra')
      noAnnotations=0
      
      CommentModel.findOne({cid: id}, function (err, comment) {
        if(err){
          console.log('error')
        } else{
          noAnnotations=Object.keys(comment.joke_annotations).length
          newField ="joke_annotations."+String(noAnnotations+1)
          var myquery =  {$set:{[newField]:value} }
         
          CommentModel.findOneAndUpdate({cid: id}, myquery ,function(err,data) {
            if(err){
            console.log('error')
          } else{
            console.log(data)
          }
          }) 
        }
      });
      
    }
  }
  res.render('./', {
    title: 'index page',
  });
})
router.get('/commentsopinion',  (req, res) => {
  //CommentModel.find()
  CommentModel.find({annotation_group_id: 40 },function(err,data){
    if(err){
      console.log(err)
    }
    //console.log(data)
  })
  .then((comments) => {
    //console.log(comments)
    res.render('commentsopinion', { title: 'Listing comments', comments });
  })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.post('/commentsopinion', (req, res) => {
  console.log("joke - post")
  var data = req.body
    console.log(data)
 
  for(count=1;count<11;count++){
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      console.log('uppfæra')
      noAnnotations=0
      
      CommentModel.findOne({cid: id}, function (err, comment) {
        if(err){
          console.log('error')
        } else{
          noAnnotations=Object.keys(comment.opinion_annotations).length
          newField ="opinion_annotations."+String(noAnnotations+1)
          var myquery =  {$set:{[newField]:value} }
         
          CommentModel.findOneAndUpdate({cid: id}, myquery ,function(err,data) {
            if(err){
            console.log('error')
          } else{
            console.log(data)
          }
          }) 
        }
      });
      
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
