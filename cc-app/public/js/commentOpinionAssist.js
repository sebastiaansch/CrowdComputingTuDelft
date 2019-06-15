chosen = [];

for(count=1;count<11;count++){
    chosen[count] = {};
    var divobj =document.getElementById("commentInfo"+count)
    var ps = divobj.getElementsByTagName('p')
    var commentid = ps[0]
    //insert the cid into the chosen object so it cn be used in the post function and update correct document
    chosen[count][0]=ps[1].id
    //opinion
    document.getElementById("opinion"+count).addEventListener("click",(elem) =>opinionFunction('opinion',elem))
    document.getElementById("noopinion"+count).addEventListener("click",(elem) =>opinionFunction('no opinion',elem))
}
document.getElementById("submitButton").addEventListener("click",(elem) => PostFuntion());


function opinionFunction(val,elem){
    console.log("opinion function ")

    console.log("joke function ") 
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    id =elem.target.id
    console.log(chosen)

    if (val =="opinion"){
         //make green
         document.getElementById("opinion"+count).classList.add("btn-success");
         document.getElementById("opinion"+count).classList.remove("btn-light");
         //make other light
         document.getElementById("noopinion"+count).classList.remove("btn-success");
         document.getElementById("noopinion"+count).classList.add("btn-light");
    }
    if (val =="no opinion"){
        //make green
        document.getElementById("noopinion"+count).classList.add("btn-success");
        document.getElementById("noopinion"+count).classList.remove("btn-light");
        //make green
        document.getElementById("opinion"+count).classList.remove("btn-success");
        document.getElementById("opinion"+count).classList.add("btn-light");
    }
}

function PostFuntion(){
    console.log("submit joke")

    var xhr = new XMLHttpRequest();
        xhr.open("POST", '/commentsopinion', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            chosen
        }))
       ;
        console.log(chosen)
    }