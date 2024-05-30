document.getElementById("input").focus();

var [actual_JSON,currentElement] = [null , null];
let score = 0; 

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/dataFR.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

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
function normalizeString(str) {
    return str
        .replace(new RegExp(/\s/g), "")
        .replace(new RegExp(/[àáâãäå]/g), "a")
        .replace(new RegExp(/æ/g), "ae")
        .replace(new RegExp(/ç/g), "c")
        .replace(new RegExp(/[èéêë]/g), "e")
        .replace(new RegExp(/[ìíîï]/g), "i")
        .replace(new RegExp(/ñ/g), "n")
        .replace(new RegExp(/[òóôõö]/g), "o")
        .replace(new RegExp(/œ/g), "oe")
        .replace(new RegExp(/[ùúûü]/g), "u")
        .replace(new RegExp(/[ýÿ]/g), "y")
        .replace(new RegExp(/\W/g), ""); // Remove all non-word characters including apostrophes
}

function verifWord(e){ 
    var reponse = normalizeString(this.value);

    // Vérifier si la réponse normalisée correspond à une des capitales normalisées
    var capitalCorrect = currentElement.capital.some(cap => normalizeString(cap).toUpperCase() === reponse.toUpperCase());

    if (capitalCorrect) {
        increaseScore();
        changeWord(document.getElementById("word"));
    }
}

function changeWord(div){
    if (actual_JSON.length === 0) {
        showSuccessMessage();
        return;
    }

    [currentElement, actual_JSON] = getRandomElement(actual_JSON);
    div.textContent = currentElement.country;
    document.getElementById("input").value = "";
    console.log(currentElement.country);
    console.log(currentElement.capital);
}



function increaseScore() {

    score = Number(document.getElementById("score").textContent) || 0;
    score += 1;
    document.getElementById("score").textContent = score;
}

function showSuccessMessage() {
    document.getElementById("word").textContent = "Félicitations ! Vous avez deviné toutes les capitales.";
    document.getElementById("input").style.display = "none"; 
}

