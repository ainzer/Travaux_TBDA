// Définition des constantes
const LARGEUR_GRILLE = 20;
const HAUTEUR_GRILLE = 20;
const TAILLE_BLOC = 20;
const TAILLE_ECRAN = LARGEUR_GRILLE * TAILLE_BLOC;

const symboles_blocs = {
    0: " ",
    1: "O",
    2: "#",
    3: "^",
    4: "$",
    5: "*",
    6: "@",
};

// Définition de la grille
let grille = [];
for (let i = 0; i < LARGEUR_GRILLE; i++) {
    let ligne = new Array(HAUTEUR_GRILLE).fill(0);
    grille.push(ligne);
}

// Définition de la position du joueur
let position_joueur = [0, 0];

// Récupération du canvas et du contexte de dessin
let canvas = document.getElementById("canvas");
let contexte = canvas.getContext("2d");

// Gestion des événements
document.addEventListener("keydown", function (evenement) {
    switch (evenement.code) {
        case "ArrowLeft":
            position_joueur[0] = Math.max(position_joueur[0] - 1, 0);
            break;
        case "ArrowRight":
            position_joueur[0] = Math.min(position_joueur[0] + 1, LARGEUR_GRILLE - 1);
            break;
        case "ArrowUp":
            position_joueur[1] = Math.max(position_joueur[1] - 1, 0);
            break;
        case "ArrowDown":
            position_joueur[1] = Math.min(position_joueur[1] + 1, HAUTEUR_GRILLE - 1);
            break;
    }
});

// Boucle de dessin
function dessiner() {
    // Dessin de la grille
    for (let x = 0; x < LARGEUR_GRILLE; x++) {
        for (let y = 0; y < HAUTEUR_GRILLE; y++) {
            let symbole = symboles_blocs[grille[x][y]];
            if (symbole != " ") {
                let couleur = "rgb(139, 69, 19)";
                if (x == position_joueur[0] && y == position_joueur[1]) {
                    couleur = "rgb(0, 255, 0)";
                }
                contexte.fillStyle = couleur;
                contexte.fillRect(x * TAILLE_BLOC, y * TAILLE_BLOC, TAILLE_BLOC, TAILLE_BLOC);
                contexte.strokeStyle = "rgb(255, 255, 255)";
                contexte.strokeRect(x * TAILLE_BLOC, y * TAILLE_BLOC, TAILLE_BLOC, TAILLE_BLOC);
                contexte.font = "20px monospace";
                contexte.fillStyle = "rgb(255, 255, 255)";
                contexte.fillText(symbole, x * TAILLE_BLOC + 5, y * TAILLE_BLOC + 15);
            }
        }
    }

    // Demande de rappel de la fonction dessiner
    requestAnimationFrame(dessiner);
}

// Lancement de la boucle de dessin
dessiner();