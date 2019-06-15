
chosen = [];
for(count=1;count<11;count++){

    chosen[count] = {};
    var divobj =document.getElementById("commentInfo"+count)
    var ps = divobj.getElementsByTagName('p')
    var commentid = ps[0]
    //insert the cid into the chosen object so it cn be used in the post function and update correct document
    chosen[count][0]=ps[1].id

    //joke
    document.getElementById("joke"+count).addEventListener("click",(elem) =>jokeFunction('joke',elem))
    document.getElementById("nojoke"+count).addEventListener("click",(elem) =>jokeFunction('no joke',elem))
}

document.getElementById("submitButton").addEventListener("click",(elem) => PostFuntion());


function jokeFunction(val,elem){
    console.log("joke function ") 
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    id =elem.target.id
    console.log(chosen)
   
    if (val =="joke"){
        //make green
        document.getElementById("joke"+count).classList.add("btn-success");
        document.getElementById("joke"+count).classList.remove("btn-light");
        //make other light
        document.getElementById("nojoke"+count).classList.remove("btn-success");
        document.getElementById("nojoke"+count).classList.add("btn-light");
    }
    if (val =="no joke"){
        //make green
        document.getElementById("nojoke"+count).classList.add("btn-success");
        document.getElementById("nojoke"+count).classList.remove("btn-light");
        //make green
        document.getElementById("joke"+count).classList.remove("btn-success");
        document.getElementById("joke"+count).classList.add("btn-light");
    }
    
}

function PostFuntion(){
    console.log("submit joke")

    var xhr = new XMLHttpRequest();
        xhr.open("POST", '/commentsjoke', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            chosen
        }))
       ;
        console.log(chosen)
  
     

}
