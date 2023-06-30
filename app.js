var inputTxt = document.querySelector("#input");
// console.log("click ", inputTxt);
var btnTranslate = document.querySelector("#button");
var outputTxt = document.querySelector("#output");
var URL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", callback);

function changeURL(URL) {
  return URL + "?" + "text=" + inputTxt.value;
}

function callback() {
  fetch(changeURL(URL))
    .then((response) => response.json())
    .then((json) => {
      var outputTranslated = json.contents.translated;
      outputTxt.innerText = outputTranslated;
      console.log(outputTranslated);
    })
    .catch(function errorHandler(error) {
      alert("something went wrong");
    });
}
