var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {

    var inputText = txtInput.value; //taking input

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
        })
}

btnTranslate.addEventListener("click", clickHandler)