function randomValues() {
    var table = document.getElementById('threeByThree');
    var listOfNumberElements = table.getElementsByTagName('td');
    
    for (var key in listOfNumberElements) {
        listOfNumberElements[key].innerHTML = Math.floor(Math.random() * 101);
    }
    
    
}