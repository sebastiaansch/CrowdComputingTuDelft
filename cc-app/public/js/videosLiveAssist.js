chosen = [];
for(count=1;count<11;count++){

    chosen[count] = {};
    var divobj =document.getElementById("videoInfo"+count)
    var ps = divobj.getElementsByTagName('p')
    var commentid = ps[0]
    //insert the cid into the chosen object so it cn be used in the post function and update correct document
    chosen[count][0]=ps[0].id

    //joke
    document.getElementById("live"+count).addEventListener("click",(elem) =>liveFunction('live',elem))
    document.getElementById("nolive"+count).addEventListener("click",(elem) =>liveFunction('no live',elem))
}

document.getElementById("submitButton").addEventListener("click",(elem) => PostFuntion());


function liveFunction(val,elem){
    console.log("live function ") 
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    id =elem.target.id
    console.log(chosen)
   
    if (val =="live"){
        //make green
        document.getElementById("live"+count).classList.add("btn-success");
        document.getElementById("live"+count).classList.remove("btn-light");
        //make other light
        document.getElementById("nolive"+count).classList.remove("btn-success");
        document.getElementById("nolive"+count).classList.add("btn-light");
    }
    if (val =="no live"){
        //make green
        document.getElementById("nolive"+count).classList.add("btn-success");
        document.getElementById("nolive"+count).classList.remove("btn-light");
        //make green
        document.getElementById("live"+count).classList.remove("btn-success");
        document.getElementById("live"+count).classList.add("btn-light");
    }
    
}

function PostFuntion(){
    console.log("submit live")

    var xhr = new XMLHttpRequest();
        xhr.open("POST", '/videosLive', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            chosen
        }))
       ;
        console.log(chosen)
  
     

}
