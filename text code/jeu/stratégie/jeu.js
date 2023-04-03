const grid = [
    ['empty', 'empty', 'obstacle', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'obstacle', 'person', 'obstacle', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'obstacle', 'empty', 'goal']
  ];
  
  let personPosition = {x: 2, y: 2};
  let goalPosition = {x: 4, y: 4};
  
  function movePerson(direction) {
    let newPosition = {x: personPosition.x, y: personPosition.y};
    switch (direction) {
      case 'left':
        newPosition.x--;
        break;
      case 'right':
        newPosition.x++;
        break;
      case 'up':
        newPosition.y--;
        break;
      case 'down':
        newPosition.y++;
        break;
    }
    if (newPosition.x < 0 || newPosition.x >= grid[0].length || newPosition.y < 0 || newPosition.y >= grid.length || grid[newPosition.y][newPosition.x] === 'obstacle') {
      return;
    }
    
    grid[personPosition.y][personPosition.x] = 'empty';
    grid[newPosition.y][newPosition.x] = 'person';
    personPosition = newPosition;
    
    if (personPosition.x === goalPosition.x && personPosition.y === goalPosition.y) {
      alert('Félicitations, vous avez gagné !');
    }
  }
  
  document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowLeft':
        movePerson('left');
        break;
      case 'ArrowRight':
        movePerson('right');
        break;
      case 'ArrowUp':
        movePerson('up');
        break;
      case 'ArrowDown':
        movePerson('down');
        break;
    }
  });