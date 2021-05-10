
document.addEventListener('click', function(event) {
    var target = event.target;
    markx(target)
});

function markx(element){
    if (element.hasAttribute("data-cell-index") && element.innerText == "") {
        element.innerText = "X";
        opponentMove() 
        
    }
    else{

    }
    //when pressed on square the square must be marked as X

}

function opponentMove() {
    //computer opponent makes a move

    //get all possible moves
    let elements = Array.from(document.querySelectorAll(".cell"))
    elements = elements.filter(function(el) {
        return el.innerText == ""
    });

    let randomNo = randomInteger(0, elements.length);

    let selectedElement = elements[randomNo];

    selectedElement.innerText = "O";

    
    //pick random element from possible moves
    //mark that element as O

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomMove() {
    //analyses boards and calculate the next move
    
}

function WhoWon() {
    //analyses the lines and calculates
    
}

function isGameFinished() {
    
}

function resetGame() {
    
}

