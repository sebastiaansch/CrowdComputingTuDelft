chosen = [];
for(count=1;count<11;count++){

    chosen[count] = {};
    var divobj =document.getElementById("commentInfo"+count)
    var ps = divobj.getElementsByTagName('p')
    var commentid = ps[0]

    chosen[count][0]=ps[0].id

    //buttons
    //person
    document.getElementById("personPick"+count).addEventListener("click",(elem) =>personFunction('person',elem))
    
    document.getElementById("personUserPick"+count).addEventListener("click",(elem) =>personFunction('person user',elem))
    document.getElementById("personArtistPick"+count).addEventListener("click",(elem) =>personFunction('person artist',elem))
    document.getElementById("personOtherPick"+count).addEventListener("click",(elem) =>personFunction('person other',elem))
   
    document.getElementById("personArtistComposerPick"+count).addEventListener("click",(elem) =>personFunction('person artist composer',elem))
    document.getElementById("personArtistRelatedComposerPick"+count).addEventListener("click",(elem) =>personFunction('person artist relatedComposer',elem))
    document.getElementById("personArtistPerformerPick"+count).addEventListener("click",(elem) =>personFunction('person artist performer',elem))
    document.getElementById("personArtistRelatedPerformerPick"+count).addEventListener("click",(elem) =>personFunction('person artist relatedPerformer',elem))
    document.getElementById("personArtistRelatedArtistPick"+count).addEventListener("click",(elem) =>personFunction('person artist relatedArtist',elem))

    //music
    document.getElementById("musicPick"+count).addEventListener("click",(elem) =>musicFunction('music',elem))
    document.getElementById("musicPiecePick"+count).addEventListener("click",(elem) =>musicFunction('music piece',elem))
    document.getElementById("musicInterpretationPick"+count).addEventListener("click",(elem) =>musicFunction('music interpretation',elem))

    document.getElementById("musicPieceCompositionPick"+count).addEventListener("click",(elem) =>musicFunction('music piece composition',elem))
    document.getElementById("musicPieceRelatedCompositionPick"+count).addEventListener("click",(elem) =>musicFunction('music piece relatedComposition',elem))
    document.getElementById("musicPieceGenrePick"+count).addEventListener("click",(elem) =>musicFunction('music piece genre',elem))
    document.getElementById("musicPieceRelatedGenrePick"+count).addEventListener("click",(elem) =>musicFunction('music piece relatedGenre',elem))

    document.getElementById("musicInterpretationPerformancePick"+count).addEventListener("click",(elem) =>musicFunction('music interpretation performance',elem))
    document.getElementById("musicInterpretationRelatedPerformancePick"+count).addEventListener("click",(elem) =>musicFunction('music interpretation relatedPerformance',elem))
    
    //consumption
    document.getElementById("consumptionPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption',elem))
    
    document.getElementById("consumptionUserContextPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption userContext',elem))
    document.getElementById("consumptionUserPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption user',elem))
    document.getElementById("consumptionParallelActivitiesPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption parallelActivities',elem))
    document.getElementById("consumptionPlatformRelatedPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption platformRelated',elem))
    document.getElementById("consumptionExperiencePick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption experience',elem))
    document.getElementById("consumptionMediaPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption media',elem))

    document.getElementById("consumptionUserGeneralPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption user general',elem))
    document.getElementById("consumptionUserOriginalPosterPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption user originalPoster',elem))

    document.getElementById("consumptionPlatformRelatedMediaHostPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption platformRelated mediaHost',elem))
    document.getElementById("consumptionPlatformRelatedRelatedMediaHostPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption platformRelated relatedMediaHost',elem))

    document.getElementById("consumptionMediaPostContentPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption media postContent',elem))
    document.getElementById("consumptionMediaRelatedContentPick"+count).addEventListener("click",(elem) =>consumptionFunction('consumption media relatedContent',elem))

    //nonRelated
    document.getElementById("nonRelatedPick"+count).addEventListener("click",(elem) =>nonRelatedFunction('nonRelated',elem))

    //buttons
};
document.getElementById("submitButton").addEventListener("click",(elem) => PostFuntion());
 console.log(html)

console.log(chosen);

function commentInfofunction(elem){
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1]=elem.target.id
    console(elem)
}

function personFunction(val,elem) {
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    
    doc =document.getElementById(elem.target.id);

    //show relevant
    document.getElementById("person"+count).style.visibility="visible"
    
    if (doc.classList.contains("btn-success")){
        setLightClass(elem.target.id)
        setLightClass("personArtistPick"+count)
        setLightClass("personUserPick"+count)
        setLightClass("personOtherPick"+count)
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
        if (val =='person'){
            document.getElementById("person"+count).style.visibility="hidden"
            document.getElementById("personArtist"+count).style.visibility="hidden"
        }
    }
    else if (doc.classList.contains("btn-light")){
        setGreenClass(elem.target.id)

    }
    
    //hide irrelevant
    document.getElementById("music"+count).style.visibility="hidden"
    document.getElementById("musicInterpretation"+count).style.visibility="hidden"
    document.getElementById("musicPiece"+count).style.visibility="hidden"
    document.getElementById("consumption"+count).style.visibility="hidden"
    document.getElementById("consumptionUser"+count).style.visibility="hidden"
    document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
    document.getElementById("consumptionMedia"+count).style.visibility="hidden"

    if (val =='person user'){
        document.getElementById("personArtist"+count).style.visibility="hidden"

        setLightClass("personOtherPick"+count)
        setLightClass("personArtistPick"+count)
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
    }
    if (val =='person artist') {
        document.getElementById("personArtist"+count).style.visibility="visible"

        setLightClass("personOtherPick"+count)
        setLightClass("personUserPick"+count)
    }
    if (val =='person other'){
        document.getElementById("personArtist"+count).style.visibility="hidden"

        setLightClass("personArtistPick"+count)
        setLightClass("personUserPick"+count)
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
    }   
    
    if (val =='person artist composer'){
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
    }

    if (val =='person artist relatedComposer'){
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
    }

    if (val =='person artist performer'){
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
    }

    if (val =='person artist relatedPerformer'){
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedArtistPick"+count)
    }
    if (val =='person artist relatedArtist'){
        setLightClass("personArtistComposerPick"+count)
        setLightClass("personArtistRelatedComposerPick"+count)
        setLightClass("personArtistPerformerPick"+count)
        setLightClass("personArtistRelatedPerformerPick"+count)
    }
}

function musicFunction(val,elem) {
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    doc =document.getElementById(elem.target.id);
    
    //show relevant
    document.getElementById("music"+count).style.visibility="visible"

    if (doc.classList.contains("btn-success")){
        setLightClass(elem.target.id)
        setLightClass("musicPiecePick"+count)
        setLightClass("musicInterpretationPick"+count)
        setLightClass("musicPieceCompositionPick"+count)
        setLightClass("musicPieceRelatedCompositionPick"+count)
        setLightClass("musicPieceGenrePick"+count)
        setLightClass("musicPieceRelatedGenrePick"+count)
        setLightClass("musicInterpretationRelatedPerformancePick"+count)
        setLightClass("musicInterpretationPerformancePick"+count)
        if (val =='music'){
            document.getElementById("music"+count).style.visibility="hidden"
            document.getElementById("musicInterpretation"+count).style.visibility="hidden"
            document.getElementById("musicPiece"+count).style.visibility="hidden"
        }
    }
    else if (doc.classList.contains("btn-light")){
        setGreenClass(elem.target.id)
    }


    //hide irrelevant
    document.getElementById("person"+count).style.visibility="hidden"
    document.getElementById("personArtist"+count).style.visibility="hidden"
    document.getElementById("consumption"+count).style.visibility="hidden"
    document.getElementById("consumptionUser"+count).style.visibility="hidden"
    document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
    document.getElementById("consumptionMedia"+count).style.visibility="hidden"
    
    if (val =='music piece'){
        document.getElementById("musicPiece"+count).style.visibility="visible"
        document.getElementById("musicInterpretation"+count).style.visibility="hidden"

        setLightClass("musicInterpretationPick"+count)
        setLightClass("musicInterpretationRelatedPerformancePick"+count)
        setLightClass("musicInterpretationPerformancePick"+count)
    }
    if (val =='music interpretation'){
        document.getElementById("musicInterpretation"+count).style.visibility="visible"
        document.getElementById("musicPiece"+count).style.visibility="hidden"

        setLightClass("musicPiecePick"+count)
        setLightClass("musicPieceCompositionPick"+count)
        setLightClass("musicPieceRelatedCompositionPick"+count)
        setLightClass("musicPieceGenrePick"+count)
        setLightClass("musicPieceRelatedGenrePick"+count)
    }

    if(val=='music piece composition'){
        setLightClass("musicPieceRelatedCompositionPick"+count)
        setLightClass("musicPieceGenrePick"+count)
        setLightClass("musicPieceRelatedGenrePick"+count)
    }
    if(val=='music piece relatedComposition'){
        setLightClass("musicPieceCompositionPick"+count)
        setLightClass("musicPieceGenrePick"+count)
        setLightClass("musicPieceRelatedGenrePick"+count)
    }
    if(val=='music piece genre'){
        setLightClass("musicPieceCompositionPick"+count)
        setLightClass("musicPieceRelatedCompositionPick"+count)
        setLightClass("musicPieceRelatedGenrePick"+count)
    }
    if(val=='music piece relatedGenre'){
        setLightClass("musicPieceCompositionPick"+count)
        setLightClass("musicPieceRelatedCompositionPick"+count)
        setLightClass("musicPieceGenrePick"+count)
    }
    if(val=='music interpretation performance'){
        setLightClass("musicInterpretationRelatedPerformancePick"+count)
    }
    if(val=='music interpretation relatedPerformance'){
        setLightClass("musicInterpretationPerformancePick"+count)
    }
}


function consumptionFunction(val,elem) {
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val
    doc =document.getElementById(elem.target.id);
    //show relevant
    document.getElementById("consumption"+count).style.visibility="visible"

    if (doc.classList.contains("btn-success")){
        setLightClass(elem.target.id)
        setLightClass("consumptionUserContextPick"+count)
        setLightClass("consumptionUserPick"+count)
        setLightClass("consumptionParallelActivitiesPick"+count)
        setLightClass("consumptionPlatformRelatedPick"+count)
        setLightClass("consumptionExperiencePick"+count)
        setLightClass("consumptionMediaPick"+count)
        setLightClass("consumptionUserOriginalPosterPick"+count)
        setLightClass("consumptionUserGeneralPick"+count)
        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)
        setLightClass("consumptionMediaRelatedContentPick"+count)
        setLightClass("consumptionMediaPostContentPick"+count)
        if (val =='consumption'){
            document.getElementById("consumption"+count).style.visibility="hidden"
            document.getElementById("consumptionUser"+count).style.visibility="hidden"
            document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
            document.getElementById("consumptionMedia"+count).style.visibility="hidden"
        }
    }
    else if (doc.classList.contains("btn-light")){
        setGreenClass(elem.target.id)
    }
  
    
    //hide irrelevant
    document.getElementById("person"+count).style.visibility="hidden"
    document.getElementById("personArtist"+count).style.visibility="hidden"
    document.getElementById("music"+count).style.visibility="hidden"
    document.getElementById("musicInterpretation"+count).style.visibility="hidden"
    document.getElementById("musicPiece"+count).style.visibility="hidden"
    
    if (val =='consumption userContext'){
        document.getElementById("consumptionUser"+count).style.visibility="hidden"
        document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
        document.getElementById("consumptionMedia"+count).style.visibility="hidden"

       
        setLightClass("consumptionUserPick"+count)
        setLightClass("consumptionParallelActivitiesPick"+count)
        setLightClass("consumptionPlatformRelatedPick"+count)
        setLightClass("consumptionExperiencePick"+count)
        setLightClass("consumptionMediaPick"+count)
        setLightClass("consumptionUserOriginalPosterPick"+count)
        setLightClass("consumptionUserGeneralPick"+count)
        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)
        setLightClass("consumptionMediaRelatedContentPick"+count)
        setLightClass("consumptionMediaPostContentPick"+count)
    }
    if (val =='consumption user'){
        document.getElementById("consumptionUser"+count).style.visibility="visible"
        document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
        document.getElementById("consumptionMedia"+count).style.visibility="hidden"
        setLightClass("consumptionUserContextPick"+count)
        setLightClass("consumptionParallelActivitiesPick"+count)
        setLightClass("consumptionPlatformRelatedPick"+count)
        setLightClass("consumptionExperiencePick"+count)
        setLightClass("consumptionMediaPick"+count)

        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)
        setLightClass("consumptionMediaRelatedContentPick"+count)
        setLightClass("consumptionMediaPostContentPick"+count)
        
    }
    if (val =='consumption parallelActivities'){
        document.getElementById("consumptionUser"+count).style.visibility="hidden"
        document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
        document.getElementById("consumptionMedia"+count).style.visibility="hidden"
        setLightClass("consumptionUserContextPick"+count)
        setLightClass("consumptionUserPick"+count)
        setLightClass("consumptionPlatformRelatedPick"+count)
        setLightClass("consumptionExperiencePick"+count)
        setLightClass("consumptionMediaPick"+count)
        setLightClass("consumptionUserOriginalPosterPick"+count)
        setLightClass("consumptionUserGeneralPick"+count)
        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)
        setLightClass("consumptionMediaRelatedContentPick"+count)
        setLightClass("consumptionMediaPostContentPick"+count)
    }
    if (val =='consumption platformRelated'){
        document.getElementById("consumptionUser"+count).style.visibility="hidden"
        document.getElementById("consumptionPlatformRelated"+count).style.visibility="visible"
        document.getElementById("consumptionMedia"+count).style.visibility="hidden"
        setLightClass("consumptionUserContextPick"+count)
        setLightClass("consumptionUserPick"+count)
        setLightClass("consumptionParallelActivitiesPick"+count)
        setLightClass("consumptionExperiencePick"+count)
        setLightClass("consumptionMediaPick"+count)
        setLightClass("consumptionUserOriginalPosterPick"+count)
        setLightClass("consumptionUserGeneralPick"+count)
        setLightClass("consumptionMediaRelatedContentPick"+count)
        setLightClass("consumptionMediaPostContentPick"+count)
    }
    if (val =='consumption experience'){
        document.getElementById("consumptionUser"+count).style.visibility="hidden"
        document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
        document.getElementById("consumptionMedia"+count).style.visibility="hidden"
        setLightClass("consumptionUserContextPick"+count)
        setLightClass("consumptionUserPick"+count)
        setLightClass("consumptionParallelActivitiesPick"+count)
        setLightClass("consumptionPlatformRelatedPick"+count)
        setLightClass("consumptionMediaPick"+count)
        setLightClass("consumptionUserOriginalPosterPick"+count)
        setLightClass("consumptionUserGeneralPick"+count)
        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)
        setLightClass("consumptionMediaRelatedContentPick"+count)
        setLightClass("consumptionMediaPostContentPick"+count)
    }
    if (val =='consumption media'){
        document.getElementById("consumptionUser"+count).style.visibility="hidden"
        document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
        document.getElementById("consumptionMedia"+count).style.visibility="visible"
        setLightClass("consumptionUserContextPick"+count)
        setLightClass("consumptionUserPick"+count)
        setLightClass("consumptionParallelActivitiesPick"+count)
        setLightClass("consumptionPlatformRelatedPick"+count)
        setLightClass("consumptionExperiencePick"+count)
        setLightClass("consumptionUserOriginalPosterPick"+count)
        setLightClass("consumptionUserGeneralPick"+count)
        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)

    }

    if(val=='consumption user general'){
        setLightClass("consumptionUserOriginalPosterPick"+count)
    }
    if(val=='consumption user originalPoster'){
        setLightClass("consumptionUserGeneralPick"+count)
    }
    if(val=='consumption platformRelated mediaHost'){
        setLightClass("consumptionPlatformRelatedRelatedMediaHostPick"+count)
    }
    if(val=='consumption platformRelated relatedMediaHost'){
        setLightClass("consumptionPlatformRelatedMediaHostPick"+count)
    }
    if(val=='consumption media postContent'){
        setLightClass("consumptionMediaRelatedContentPick"+count)
    }
    if(val=='consumption media relatedContent'){
        setLightClass("consumptionMediaPostContentPick"+count)
    }
  
}


function nonRelatedFunction(val,elem) {
    count = elem.target.id.match(/\d+/)[0] // "3"
    chosen[count][1] = val

    doc =document.getElementById(elem.target.id);
    
    if (doc.classList.contains("btn-success")){
        setLightClass(elem.target.id)
    }
    else if (doc.classList.contains("btn-light")){
        setGreenClass(elem.target.id)
    }

    //show relevant
    //hide irrelevant
    document.getElementById("person"+count).style.visibility="hidden"
    document.getElementById("personArtist"+count).style.visibility="hidden"
    document.getElementById("music"+count).style.visibility="hidden"
    document.getElementById("musicInterpretation"+count).style.visibility="hidden"
    document.getElementById("musicPiece"+count).style.visibility="hidden"
    document.getElementById("consumption"+count).style.visibility="hidden"
    document.getElementById("consumptionUser"+count).style.visibility="hidden"
    document.getElementById("consumptionPlatformRelated"+count).style.visibility="hidden"
    document.getElementById("consumptionMedia"+count).style.visibility="hidden"
    if (val =='non related'){
        document.getElementById("person"+count).style.visibility="hidden"
        document.getElementById("personArtist"+count).style.visibility="hidden"    
    }
  }

function setLightClass(id){
        document.getElementById(id).classList.remove("btn-success");
        document.getElementById(id).classList.add("btn-light");
}
function setGreenClass(id){
    document.getElementById(id).classList.add("btn-success");
    document.getElementById(id).classList.remove("btn-light");
}

function PostFuntion(){
    console.log("í submit")

    var xhr = new XMLHttpRequest();
        xhr.open("POST", '/comments', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            chosen
        }))
       ;
        //xhr.onload('test response')
        //xhr.send('test body')
        //console.log(JSON.stringify(chosen))
        console.log(chosen)
  
     
     /*   
        fetch( '/comments', {
            method : "POST",
            //body: new FormData(document.getElementById("inputform")),
            // -- or --
            header : {'Content-type': 'application/json'},
            body : JSON.stringify({"value" :"foo"})  
             //    user : document.getElementById('user').value,
                // ...
            
            
        }).then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
            html => console.log(html)
        );
       */   

}

