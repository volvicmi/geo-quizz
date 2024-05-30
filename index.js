document.getElementById("input").focus();

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 var [actual_JSON,currentElement] = [null , null];

 loadJSON(function(response) {
    // Parse JSON string into object
    actual_JSON = JSON.parse(response);
    changeWord(document.getElementById("word"));
    document.getElementById("input").addEventListener("input",verifWord);    
   });

function getRandomElement(data) {
    var index = Math.floor(Math.random() * data.length);
    var element = data[index];
    
    data.splice(index,1);
    
    return [element,data];
}

function verifWord(e){
    var reponse = this.value;
    
    reponse = reponse.replace(new RegExp(/\s/g),"");
    reponse = reponse.replace(new RegExp(/[àáâãäå]/g),"a");
    reponse = reponse.replace(new RegExp(/æ/g),"ae");
    reponse = reponse.replace(new RegExp(/ç/g),"c");
    reponse = reponse.replace(new RegExp(/[èéêë]/g),"e");
    reponse = reponse.replace(new RegExp(/[ìíîï]/g),"i");
    reponse = reponse.replace(new RegExp(/ñ/g),"n");                
    reponse = reponse.replace(new RegExp(/[òóôõö]/g),"o");
    reponse = reponse.replace(new RegExp(/œ/g),"oe");
    reponse = reponse.replace(new RegExp(/[ùúûü]/g),"u");
    reponse = reponse.replace(new RegExp(/[ýÿ]/g),"y");
    reponse = reponse.replace(new RegExp(/\W/g),"");
    
    if(this.value.toUpperCase() == currentElement.capital.toUpperCase()){
        changeWord(document.getElementById("word"));
    }
}

function changeWord(div){
    [currentElement, actual_JSON] = getRandomElement(actual_JSON);
    div.textContent = currentElement.country;
    document.getElementById("input").value = "";
    console.log(currentElement.capital);
}