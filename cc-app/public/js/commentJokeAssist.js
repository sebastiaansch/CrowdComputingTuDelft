console.log("joke assist")
for(count=1;count<11;count++){
    //joke
    document.getElementById("joke"+count).addEventListener("click",(elem) =>jokeFunction('yes',elem))
    document.getElementById("nojoke"+count).addEventListener("click",(elem) =>jokeFunction('no',elem))
}


function jokeFunction(val,elem){
    console.log("joke function ")
    count = elem.target.id.match(/\d+/)[0] // "3"
    id =elem.target.id
    console.log(count)
    console.log(id)
    if (val =="yes"){
        document.getElementById("joke"+count).classList.add("btn-success");
        document.getElementById("joke"+count).classList.remove("btn-light");
    }
    if (val =="no"){
        document.getElementById("nojoke"+count).classList.add("btn-success");
        document.getElementById("nojoke"+count).classList.remove("btn-light");
    }
}

