// Récupération des éléments du DOM
const playerHp = document.getElementById("player-hp");
const playerAtk = document.getElementById("player-atk");
const enemyHp = document.getElementById("enemy-hp")
const enemyAtk = document.getElementById("enemy-atk");
const attackButton = document.getElementById("attack-button");


// Définition des variables du jeu
let playerHealth = 100;
let playerAttack = 10;
let enemyHealth = 50;
let enemyAttack = 5;


// Fonction pour l'attaque du joueur
function playerAttackFunc() {
    enemyHealth -= playerAttack;
    enemyHp.innerHTML = enemyHealth;


    // Vérification si l'ennemi est mort
    if (enemyHealth <= 0) {
        alert("Vous avez gagné !");
        resetGame();
    } else {
        // L'ennemi attaque à son tour
        playerHealth -= enemyAttack;
        playerHp.innerHTML = playerHealth;

        // Vérification si le joueur est mort
        if (playerHealth <= 0) {
            alert("Vous avez perdu...");
            resetGame();
        }
    }
}


// Fonction pour réinitialiser le jeu
function resetGame() {
    playerHealth = 100;
    playerAttack = 10;
    enemyHealth = 50;
    enemyAttack = 5;
    playerHp.innerHTML = playerHealth;
    enemyHp.innerHTML = enemyHealth;
}


// Ajout d'un événement "click" sur le bouton d'attaque
attackButton.addEventListener("click", playerAttackFunc);