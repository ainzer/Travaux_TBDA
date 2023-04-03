let currentPlayer = 'x';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll('td');
const restartButton = document.querySelector('#restart');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    const index = cell.getAttribute('id');
    gameBoard[index] = currentPlayer;

    const winner = checkWin();
    if (winner) {
      alert(`Le joueur ${currentPlayer.toUpperCase()} a gagné!`);
      restart();
      return;
    }

    const isTie = checkTie();
    if (isTie) {
      alert('Match nul!');
      restart();
      return;
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  });
});

restartButton.addEventListener('click', restart);

function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      gameBoard[a] === currentPlayer &&
      gameBoard[b] === currentPlayer &&
      gameBoard[c] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  return gameBoard.every(cell => cell !== '');
}

function restart() {
  currentPlayer = 'x';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
}
