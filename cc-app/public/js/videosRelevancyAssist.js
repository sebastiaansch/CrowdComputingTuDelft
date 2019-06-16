chosen = [];
for(count=1;count<11;count++){

    chosen[count] = {};
    var divobj =document.getElementById("videoInfo"+count)
    var ps = divobj.getElementsByTagName('p')
    var commentid = ps[0]
    //insert the cid into the chosen object so it cn be used in the post function and update correct document
    chosen[count][0]=ps[1].id

    //joke
    document.getElementById("relevant"+count).addEventListener("click",(elem) =>relevantFunction('relevant',elem))
    document.getElementById("norelevant"+count).addEventListener("click",(elem) =>relevantFunction('no relevant',elem))
}

document.getElementById("submitButton").addEventListener("click",(elem) => PostFuntion());


function relevantFunction(val,elem){
    console.log("relevant function ") 
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    id =elem.target.id
    console.log(chosen)
   
    if (val =="relevant"){
        //make green
        document.getElementById("relevant"+count).classList.add("btn-success");
        document.getElementById("relevant"+count).classList.remove("btn-light");
        //make other light
        document.getElementById("norelevant"+count).classList.remove("btn-success");
        document.getElementById("norelevant"+count).classList.add("btn-light");
    }
    if (val =="no relevant"){
        //make green
        document.getElementById("norelevant"+count).classList.add("btn-success");
        document.getElementById("norelevant"+count).classList.remove("btn-light");
        //make green
        document.getElementById("relevant"+count).classList.remove("btn-success");
        document.getElementById("relevant"+count).classList.add("btn-light");
    }
    
}

function PostFuntion(){
    console.log("submit relevant")

    var xhr = new XMLHttpRequest();
        xhr.open("POST", '/videosRelevance', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            chosen
        }))
       ;
        console.log(chosen)
  
     

}
