## Requirements

* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [MongoDB Compass](https://www.mongodb.com/products/compass) (optional)

## Installation Steps

1. Clone repo
2. Run `npm install`
3. Create a `.env` file in the project root with database connection details
4. Start MongoDB (using `mongod`) if running locally
5. Run `npm run watch`
6. Visit http://localhost:3000 for index page
7. Visit http://localhost:3000/comments for comments
8. Visit http://localhost:3000/videos for video


## I have created two new fields in my local database in the comments collection.

db.comments.update( {}, {$set:{"annotation_group_id":0}}, false, true)
db.comments.update( {}, {$set:{"annotation_done":0}}, false, true)

## mongo.js
then I updated the annotation_group and grouped 10 and 10 together.. needs to be thought through since all the comments that are grouped together now are of the same video.