document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    let snake = [{ x: 0, y: 0 }];
    let food = generateFoodPosition();

    function generateFoodPosition() {
        const x = Math.floor(Math.random() * 10) * 30;
        const y = Math.floor(Math.random() * 10) * 30;
        return { x, y };
    }

    function render() {
        board.innerHTML = '';
        
        snake.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.className = 'snake';
            snakeElement.style.left = `${segment.x}px`;
            snakeElement.style.top = `${segment.y}px`;
            board.appendChild(snakeElement);
        });

        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.left = `${food.x}px`;
        foodElement.style.top = `${food.y}px`;
        board.appendChild(foodElement);
    }

    function move() {
        // Logique de déplacement du serpent ici
        const head = { ...snake[0] }; // Crée une copie de la tête du serpent

        switch (direction) {
            case 'UP':
                head.y -= 30;
                break;
            case 'DOWN':
                head.y += 30;
                break;
            case 'LEFT':
                head.x -= 30;
                break;
            case 'RIGHT':
                head.x += 30;
                break;
        }
    
        snake.unshift(head); // Ajoute la nouvelle tête au début du tableau
    
        // Vérifie si le serpent a mangé de la nourriture
        if (head.x === food.x && head.y === food.y) {
            food = generateFoodPosition();
        } else {
            snake.pop(); // Retire la dernière partie du serpent (la queue) si aucune nourriture n'a été mangée
        }
    }
    let direction = 'RIGHT'; // Direction par défaut


    function gameLoop() {
        // Boucle principale du jeu ici
        move();
        render();
        setTimeout(gameLoop, 200); // Appelle la boucle principale toutes les 200 millisecondes
    }

    document.addEventListener('keydown', (e) => {
        // Gestion des touches de direction ici
        switch (e.key) {
            case 'ArrowUp':
                direction = 'UP';
                break;
            case 'ArrowDown':
                direction = 'DOWN';
                break;
            case 'ArrowLeft':
                direction = 'LEFT';
                break;
            case 'ArrowRight':
                direction = 'RIGHT';
                break;
        }
    });

    gameLoop();
});
