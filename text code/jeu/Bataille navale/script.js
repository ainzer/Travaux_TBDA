const GRID_SIZE = 10;
const SHIP_SIZE = 3;
const ships = [];


const grid = document.getElementById("grid");
const restartButton = document.getElementById("restart-button");


let numshipsSunk = 0;


restartButton.addEventListener("click", init);


function init() {
    ships.length = 0;
    numshipsSunk = 0;
    grid.innerHTML = "";
    createGrid();
    createShips();
}


function createGrid() {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener("click", handlecellClick);
            grid.appendChild(cell);
        }
    }
}


function createShips() {
    let shipCount = 0;
    while (shipCount < 3) {
        const orientation = Math.floor(Math.random() * 2);
        let ship;
        if (orientation === 0) {
            // horizontal ship
            const row = Math.floor(Math.random() * GRID_SIZE);
            const col = Math.floor(Math.random() * (GRID_SIZE - SHIP_SIZE + 1));
            ship = Array.from(
                { length: SHIP_SIZE },
                (_, i) => `[data-row="${row}"][data-col="${col}"]`
            );
        } else {
            // vertical ship
            const row = Math.floor(Math.random() * (GRID_SIZE - SHIP_SIZE + 1));
            const col = Math.floor(Math.random() * GRID_SIZE);
            ship = Array.from(
                { length: SHIP_SIZE },
                (_, i) => `[data-row="${row + i}"][data-col="${col}"]`
            );
        }
        if (!ship.some(cell => ship.flat().include(cell))) {
            // check that the ship doesn't overlap with an existing ship
            ship.forEach(cell => {
                document.querySelector(cell).classList.add("ship");
            });
            ships.push(ship);
            shipCount++;
        }
    }
}


function handleCellClick(event) {
    const cell = event.target;
    const isHit = cell.classList.contains("ship");
    if (isHit) {
        cell.classList.add("hit");
        checkIfShipSunk(cell);
        checkIfGameWon();
    } else {
        cell.classList.add("miss");
    }
    cell.removeEventListener("click", handleCellClick);
}

function checkIfShipSunk(cell) {
    const ship = ships.find(ship => ship.includes(`[data - row ="${cell.dataset.row}"][data - col ="${cell.dataset.col}"]`));
    const isSunk = ship.every(cell => document.querySelector(cell).classList.contains("hit"));
    if (isSunk) {
        numShipsSunk++;
        ship.forEach(cell => {
            document.querySelector(cell).classList.add("sunk");
            document.querySelector(cell).removeEventListener("click", handleCellClick);
        });
    }
}

function checkIfGameWon() {
    if (numShipsSunk === 3) {
        alert("Félicitations ! Vous avez gagné !");
        grid.querySelectorAll(".cell").forEach(cell => {
            cell.removeEventListener("click", handleCellClick);
        });
    }
}

init();