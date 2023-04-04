// Générer un nombre aléatoire entre 1 et 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialiser les variables
var guesses = 10;
var gameOver = false;

// Fonction pour vérifier la devinette
function checkGuess() {
  if (gameOver) {
    return;
  }

  // Obtenir la devinette de l'utilisateur
  var guess = parseInt(document.getElementById("guessInput").value);

  // Vérifier si la devinette est correcte
  if (guess === randomNumber) {
    document.getElementById("guessOutput").innerHTML = "Bravo! Vous avez deviné le nombre correct: " + randomNumber;
    gameOver = true;
  } else {
    // Si la devinette est incorrecte, afficher un message d'erreur
    guesses--;
    if (guess < randomNumber) {
      document.getElementById("guessOutput").innerHTML = "Désolé, votre devinette est trop basse.";
    } else {
      document.getElementById("guessOutput").innerHTML = "Désolé, votre devinette est trop haute.";
    }

    // Vérifier s'il reste des essais
    if (guesses === 0) {
      document.getElementById("guessOutput").innerHTML = "Vous avez perdu! Le nombre correct était: " + randomNumber;
      gameOver = true;
    } else {
      document.getElementById("guessesRemaining").innerHTML = "Il vous reste " + guesses + " essais.";
    }
  }
}
