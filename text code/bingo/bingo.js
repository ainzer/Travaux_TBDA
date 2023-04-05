const bingoBoard = document.getElementById('bingo-board');
const newGameButton = document.getElementById('new-game');

let numbersSelected = [];

function createBoard() {
    const letters = ['B', 'I', 'N', 'G', 'O'];
    let index = 0;
    for (let row = 1; row <= 5; row++) {
        for (let col = 1; col <= 5; col++) {
            const cell = document.createElement('div');
            cell.innerText = letters[col - 1] + (row + (col - 1) * 5);
            cell.setAttribute('data-row', row);
            cell.setAttribute('data-col', col);
            bingoBoard.appendChild(cell);
        }
    }
}


function selectNumber() {
    const maxNumber = 75;
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    while (numbersSelected.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    }
    numbersSelected.push(randomNumber);
    const selectedCell = document.querySelector(`div[data-value="${randomNumber}"]`);
    if (selectedCell) {
        selectedCell.classList.add('selected');
    }
}


function resetGame() {
    numbersSelected = [];
    const cells = bingoBoard.querySelectorAll('div');
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('selected');
    }
}


createBoard();


newGameButton.addEventListener('click', function() {
    resetGame();
    selectNumber();
});


bingoBoard.addEventListener('click', function(event) {
    const clickedCell = event.target;
    if (clickedCell.tagName === 'DIV') {
        clickedCell.classList.toggle('selected');
    }
});