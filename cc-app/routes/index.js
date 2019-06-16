const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const auth = require('http-auth');
//const await = require('await')
var async = require('async');
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
  VideoModel.find({annotation_group_id: 52 },function(err,data){
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


router.get('/videosLive',  (req, res) => { 
  //search by some random value to get few videos
  VideoModel.find({annotation_group_id: 52 },function(err,data){
    if(err){
      console.log(err)
    }
    //console.log(data)
  })
  .then((videos) => {
    //console.log(videos)
    res.render('videosLive', { title: 'Listing videos', videos });
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

router.post('/commentscateg', async (req, res) => {
  console.log("í post aðgerð")
  var request = req.body
    console.log(request)
 
  for(count=1;count<11;count++){
    var id = request['chosen'][count][0]
    console.log('ID: '+id)

    var value = request['chosen'][count][1][1] +" & "+request['chosen'][count][1][2]+" & "+request['chosen'][count][1][3]+" & "+request['chosen'][count][1][4]
    console.log('Value: '+value)
    console.log(request['chosen'][count][1]=="[]" )
    if (value != "undefined & undefined & undefined & undefined"){
      noAnnotations=0
      
      var myPromise = () => {return new Promise((resolve, reject) => {
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
              resolve(data)
            }
            }) 
          }
        });
      })
    }
     var result = await myPromise()
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

router.post('/commentsjoke',async (req, res) => {
  console.log("joke - post")
  var data = req.body
    console.log(data)
 
  for(count=1;count<11;count++){
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      console.log('update')
      noAnnotations=0
      var myPromise = () => {return new Promise((resolve, reject) => {
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
              resolve(data)
            }
          }) 
        }
      });
      })
      }
      var result = await myPromise() 
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

router.post('/commentsopinion', async (req, res) => {
  var data = req.body
 
  for(count=1;count<11;count++){
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      noAnnotations=0
      var myPromise = () => {return new Promise((resolve, reject) => {
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
              resolve(data)
            }
          }) 
        }
      });
    })
    }
    var result = await myPromise()   
    }
  }
  res.render('./', {
    title: 'index page',
  });
})



router.post('/videosRelevance', async (req, res) => {


  var data = req.body
 
  for(count=1;count<11;count++){
    console.log(count)
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      noAnnotations=0
      var myPromise = () => {return new Promise((resolve, reject) => {
        VideoModel.findOne({video_id: id}, function (err, video) {
          if(err){
            console.log('error')
          } else{
            noAnnotations=Object.keys(video.relevant_annotations).length
            newField ="relevant_annotations."+String(noAnnotations+1)
            var myquery =  {$set:{[newField]:value} }
          
            VideoModel.findOneAndUpdate({video_id: id}, myquery ,function(err,data) {
              if(err){
              console.log('error')
            } else{
                console.log(data)
                resolve(data)
            }
          }) 
        }
      });
    })
    }
    var result = await myPromise()   
    }
  }
  res.render('./', {
    title: 'index page',
  });
 
})

router.post('/videosLive', async (req, res) => {
 
 var data = req.body
 
  for(count=1;count<11;count++){
    console.log(count)
    var id = data['chosen'][count][0]
    console.log('ID: '+id)

    var value = data['chosen'][count][1]
    console.log('Value: '+value)
    if (value != undefined){
      noAnnotations=0
      var myPromise = () => {return new Promise((resolve, reject) => {
        VideoModel.findOne({video_id: id}, function (err, video) {
          if(err){
            console.log('error')
          } else{
            noAnnotations=Object.keys(video.relevant_annotations).length
            newField ="live_annotations."+String(noAnnotations+1)
            var myquery =  {$set:{[newField]:value} }
          
            VideoModel.findOneAndUpdate({video_id: id}, myquery ,function(err,data) {
              if(err){
              console.log('error')
            } else{
                console.log(data)
                resolve(data)
            }
          }) 
        }
      });
    })
    }
    var result = await myPromise()   
    }
  }
  res.render('./', {
    title: 'index page',
  });
 
})


module.exports = router;
