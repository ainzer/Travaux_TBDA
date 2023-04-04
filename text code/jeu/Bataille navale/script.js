var board = document.getElementById("board");
var squares = [];

var shipLocations = [[0,1,2], [25,35,45,55], [95,96,97,98,99], [19,29,39,49,59]];
var hits = [];
var misses = [];

function createBoard() {
    for (var i = 0; i < 100; i++) {
        var square = document.createElement("div");
        square.setAttribute("data-index", i);
        square.addEventListener("click", fire);
        board.appendChild(square);
        squares.push(square);
    }
}

function placeShips() {
    for (var i = 0; i < shipLocations.length; i++) {
        var ship = shipLocations[i];
        for (var j = 0; j < ship.length; j++) {
            squares[ship[j]].classList.add("ship");
        }
    }
}

function fire() {
    var index = parseInt(this.getAttribute("data-index"));
    if (hits.includes(index) || misses.includes(index)) {
        return;
    }
    if (squares[index].classList.contains("ship")) {
        squares[index].classList.add("hit");
        hits.push(index);
        if (hits.length == 10) {
            alert("Vous avez gagné!");
        }
    } else {
        squares[index].classList.add("miss");
        misses.push(index);
    }
}

createBoard();
placeShips();
