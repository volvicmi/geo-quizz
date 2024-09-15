document.getElementById("input").focus();

var [actual_JSON,currentElement] = [null , null];
let score = 0; 

loadJSON(function(response) {
    // Parse JSON string into object
    actual_JSON = JSON.parse(response);
    changeWord(document.getElementById("word"));
    setupEvenement();
});

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

function setupEvenement(){
    document.getElementById("input").addEventListener("input", verifWord);
    document.getElementById('btnTips').addEventListener('click', giveTips);
}

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

function verifWord(){ 

    var textContainer = document.getElementById('textContainer');
    var tips = textContainer.querySelector('.tips');
    var currentTips = (tips ? tips.textContent : '');
    
    if(this.value.length < currentTips.length) this.value = currentTips;
    textContainer.innerHTML = `<span class="tips">${currentTips}</span>${this.value.slice(currentTips.length)}`;
    
    var response = normalizeString(this.value);

    // Vérifier si la réponse normalisée correspond à une des capitales normalisées
    var capitalCorrect = currentElement.capital.some(cap => normalizeString(cap).toUpperCase() === response.toUpperCase());

    console.log(capitalCorrect);
    if (capitalCorrect) {
        changeScore('increase');
        changeWord(document.getElementById("word"));
        console.log("le mot est correct");
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
    document.getElementById("text-container").textContent = "";
    console.log(currentElement.country);
    console.log(currentElement.capital);
}

function changeScore(action) {
    score = Number(document.getElementById("score").textContent) || 0;
    switch(action){
        case 'increase':
            score += 1;
        break;
        case 'split':
            score = Math.trunc(score / 2);
        break;
    }
    document.getElementById("score").textContent = score;

}

function showSuccessMessage() {
    document.getElementById("word").textContent = "Félicitations ! Vous avez deviné toutes les capitales.";
    document.getElementById("input").style.display = "none"; 
}

function giveTips()
{
    var textContainer = document.getElementById('textContainer');
    var tips = textContainer.querySelector('.tips');
    var currentTips = (tips ? tips.textContent : '');

    const newTips = currentTips + '' + currentElement['capital'][0].substr(currentTips.length, 1);
    textContainer.innerHTML = `<span class="tips">${newTips}</span>`;
    document.getElementById('input').value = newTips;
    changeScore('split');
    document.getElementById("input").focus();
}