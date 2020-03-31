var pageCounter = 1;
var animalContainer = document.getElementById("animal-info")
//var URLArray = ['URL1','URL2','URL3'];
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function() {
    var outPut = JSON.parse(ourRequest.responseText);
    renderHTML(outPut);
};
ourRequest.send();
pageCounter++;
if (pageCounter > 3){
    btn.classList.add("hide-me");
}
});


function renderHTML(data){
    var htmlString = " ";
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + ' is a ' + data[i].species + "</p>";
    }
   //console.log(htmlString);
   //console.log(data.length);
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
};

function loopURL(theURL) {
    var dataURL;
    for (i = 0; i < URLArray.length; i++) {
        dataURL += URLArray[i]
        console.log(dataURL);
    }

}

