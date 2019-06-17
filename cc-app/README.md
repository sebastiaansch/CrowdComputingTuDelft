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

```shell
mongod --dbpath /path/to/where/the/data/will/be/stored
```

Be careful, the path where the data will be stored should already exist. It will not be created.

## Restoring the data from a dump
We now need to filled the empty databse with data. To do so you need to have a dump of the database then run the command :
```shell
mongorestore path/to/dump
```

The dump of the database we used is in the repository, it is called *youtubeDb.zip*, it should be unzipped before being loaded in the database.


## Run the web server
Now that the database is ready, we can run the web server by using the following command :  

```shell
npm run watch
```

## Access the website
You can access the index page of the different task here : http://localhost:3000

