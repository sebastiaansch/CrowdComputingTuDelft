for(count=1;count<11;count++){
    //opinion
    document.getElementById("opinion"+count).addEventListener("click",(elem) =>opinionFunction('yes',elem))
    document.getElementById("noopinion"+count).addEventListener("click",(elem) =>opinionFunction('no',elem))
}


function opinionFunction(val,elem){
    console.log("opinion function ")
    count = elem.target.id.match(/\d+/)[0] // "3"
    id =elem.target.id
    if (val =="yes"){
        document.getElementById("opinion"+count).classList.add("btn-success");
        document.getElementById("opinion"+count).classList.remove("btn-light");
    }
    if (val =="no"){
        document.getElementById("noopinion"+count).classList.add("btn-success");
        document.getElementById("noopinion"+count).classList.remove("btn-light");
    }
}
