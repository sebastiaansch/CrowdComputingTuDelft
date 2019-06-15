## Requirements

* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [MongoDB Compass](https://www.mongodb.com/products/compass) (optional)

## Install the right dependencies
Once you've cloned the repository, you can install the necessary dependencies by being in the *cc-app* folder and running :  
```shell
npm install
```

## Creation of the .env file
We need to have a file that will hold information to connect to the database. In the directory *cc-app*, create a file called **.env** and add the following line in it:  
```
DATABASE=mongodb://localhost:27017/youtube
```

where *youtube* is the name of your database.

## Launch the database
We now launch the database by running :

<<<<<<< HEAD
```shell
mongod --dbpath /path/to/where/the/data/will/be/stored
```

Be careful, the path where the data will be stored should already exist. It will not be created.

## Restoring the data from a dump
We now need to filled the empty databse with data. To do so you need to have a dump of the database then run the command :
```shell
mongorestore path/to/dump
```


## Before launching the server, some changes need to be done in the database (it can be quite long be careful)
### First, we need to create the fields that will be used by launching these command in the mongo shell environment.
db.comments.update( {}, {$set:{"annotation_group_id":0}}, false, true)  
db.comments.update( {}, {$set:{"annotation_done":0}}, false, true)  
db.comments.update( {}, {$set:{"annotation1":0}}, false, true)  
db.videos.update( {}, {$set:{"annotation1":0}}, false, true)  

### Then we update these new fields
This is done by launching the mongo.js file with the following commands (assuming that you've run `npm install` before) :  

```shell
node mongo.js
```

These will group the comments together in group of 10 per videos and it will create random batch of 10 videos to be used in the app. **These operations takes time since we modified the entire database**

## Run the web server
Now that the database is ready, we can run the web server by using the following command :  

```shell
npm run watch
```

## Access the website
You can access the index page of the different task here : http://localhost:3000
=======
db.comments.update( {}, {$set:{"annotation_group_id":0}}, false, true)
db.comments.update( {}, {$set:{"annotation_done":0}}, false, true)
db.comments.update( {}, {$set:{"category_annotations":{}}}, false, true)
db.comments.update( {}, {$set:{"joke_annotations":{}}}, false, true)
db.comments.update( {}, {$set:{"opinion_annotations":{}}}, false, true)
>>>>>>> 5a5db6cb01028512e80c76f23fe39e1579b19f16

