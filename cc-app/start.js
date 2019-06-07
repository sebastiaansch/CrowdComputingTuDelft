require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  
    mongoose.connection.db.collection("comments").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });
    mongoose.connection.db.collection("videos").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });
    mongoose.connection.db.listCollections().toArray(function(err, collInfos) {
      // collInfos is an array of collection info objects that look like:
      // { name: 'test', options: {} }
      console.log(collInfos)
    });

  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require('./models/commentmodel');
require('./models/videomodel');
const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});


