document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const scoreContainer = document.createElement('div'); // Nouvel élément pour afficher le score
    scoreContainer.className = 'score';
    document.body.appendChild(scoreContainer);

    let snake = [{ x: 0, y: 0 }];
    let food = generateFoodPosition();
    let score = 0; // Initialise le score à zéro

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

        // Met à jour le score affiché
        scoreContainer.textContent = `Score: ${score}`;
    }

    function move() {
        const head = { ...snake[0] };

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

        if (head.x < 0 || head.x >= 1400 || head.y < 0 || head.y >= 900) {
            alert('Game Over - Collision avec les bords!');
            resetGame();
            return;
        }

        if (checkCollisionWithBody(head)) {
           /*  alert('Game Over - Collision avec le corps!'); */
            resetGame();
            return;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = generateFoodPosition();
            score += 10; // Incrémente le score lorsque le serpent mange de la nourriture
        } else {
            snake.pop();
        }
    }

    function checkCollisionWithBody(head) {
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        snake = [{ x: 0, y: 0 }];
        food = generateFoodPosition();
        score = 0; // Remet le score à zéro
    }

    let direction = 'RIGHT';

    function gameLoop() {
        move();
        render();
        setTimeout(gameLoop, 200);
    }

    document.addEventListener('keydown', (e) => {
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
