const cardImages = [  "image1.png",  "image2.png",  "image3.png",  "image4.png",  "image5.png",  "image6.png",  "image7.png",  "image8.png",  "image9.png",  "image10.png",];

let cards = [];
let flippedCards = [];
let matchedCards = [];

function startGame() {
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";
  matchedCards = [];
  flippedCards = [];
  cards = generateCards(cardImages);

  cards.forEach(card => {
    card.addEventListener("click", () => {
      flipCard(card);
    });
    gameBoard.appendChild(card);
  });
}

function generateCards(images) {
  let cardPairs = images.concat(images);
  shuffleArray(cardPairs);

  return cardPairs.map(image => {
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    cardImage.src = image;
    card.appendChild(cardImage);
    card.classList.add("card");
    return card;
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function flipCard(card) {
  if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];
      if (firstCard.firstChild.src === secondCard.firstChild.src) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          flippedCards = [];
        }, 1000);
      }
    }
  }
}