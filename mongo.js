const MongoClient = require('mongodb').MongoClient,format =require('util').format;

//const db = MongoClient.db('youtube')


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// var myArr = [1, 2, 3, 4]
// shuffleArray(myArr);
// console.log(myArr)

MongoClient.connect('mongodb://127.0.0.1:27017',function(err,db){
//MongoClient.connect('mongodb://localhost:27017/youtube',function(err,db){
    if(err){

        throw err;
    } else{

        console.log("connected");
        const database = db.db('youtube')
        const commentsCollection = database.collection('comments')
        //const collection = db.collection('comments')
        //console.log(commentsCollection)

        database.listCollections().toArray(function(err, collInfos) {
            // collInfos is an array of collection info objects that look like:
            // { name: 'test', options: {} }
            //console.log(collInfos)
        });


        // database.collection("comments").find({}).toArray(function(err, result) {
        //     if (err) throw err;
        //     //console.log(result);
        //     console.log(result.length)
        //     counter = 0
        //     groupCounter =0
        //     result.forEach(function(value){
        //         console.log(value);
                
                
        //         if ((counter%10)==0) groupCounter+=1
        //         console.log(counter)    
        //         console.log(groupCounter)
        //         console.log(result[counter]["_id"])
                
        //         var myquery = { _id: result[counter]["_id"] };
        //         var newvalues = { $set: {"annotation_group_id": groupCounter} };
        //         database.collection("comments").updateOne(myquery, newvalues, function(err, res) {
        //             if (err) throw err;
        //             console.log("1 document updated");
        //             //db.close();
        //           });
                  
        //           counter+=1;
        //       });    
         
        // });


        var videoIds = [];
    
        database.collection("videos").find({}).toArray(function(err,result) {
            //console.log(result);
            if (err) throw err;
            console.log(result.length)
            counter = 0;
            result.forEach(function(value){
               //console.log(value);
               videoIds.push(result[counter]["video_id"]);
               //console.log(videoIds);
               counter += 1
               //console.log(counter)
            });

            //console.log(videoIds);
            shuffleArray(videoIds);
            //console.log(videoIds)
            console.log(videoIds)
            
            counter = 0;
            groupCounter = 1;
            videoIds.forEach(function(elem){
                //console.log(elem)
                var myquery = { "video_id": elem};
                var newvalues = { $set: {"annotation_group_id": groupCounter} };
                var returnedD = database.collection("videos").updateOne(myquery, newvalues, function(err, res) {
                    if (err) throw err;
                    //console.log("1 document updated");
                    //db.close();
                });
                console.log(returnedD)
                counter += 1
                if ((counter%10) == 0){
                    // console.log("+10 doc !")
                    // console.log(counter)
                    // console.log(videoIds.length)
                    // console.log(groupCounter)
                    // groupCounter += 1
                }
            });
            
        });

        //console.log(videoIds);
        //console.log("finished");
        
        
        
    }

    //db.close();

});

