// dimensions de la grille

var largeur = 100;
var hauteur = 100;

// initialisation de la grille

var grille = new Array(largeur);
for (var i = 0; i < largeur; i++) {
    grille[i] = new Array(hauteur);
    for (var j = 0; j < hauteur; j++); {
        grille[i][j] = Math.round(Math.random());
    }
}

// fonction pour afficher la grille

function afficheGrille() {
    var output = "";
    for (var i = 0; i < largeur; i++) {
        for (var j = 0; j < hauteur; j++) {
            output += grille[i][j] ? "X" : ".";
        }
        output += "\n";
    }
    console.log(output);
}

// fonction pouir calculer la prochaine étape du jeu

function prochaineEtape() {
    var nouvelleGrille = new Array(largeur);
    for (var i = 0; i < largeur; i++) {
        nouvelleGrille[i] = new Array(hauteur);
        for (var j = 0; j < hauteur; j++) {
            var voisins = 0;
            for (var x = -1; x <= 1; x++) {
                for (var y = -1; y <= 1; y++) {
                    if (i + x >= 0 && i + x < largeur && j + y >= 0 && j + y < hauteur && grille[i + x][j + y]) {
                        voisins++;
                    }
                }
            }
            if (grille[i][j]) {
                voisins--;
                if (voisins == 2 || voisins == 3) {
                    nouvelleGrille[i][j] = true;
                } else {
                    nouvelleGrille[i][j] = false;
                }
            } else {
                if (voisins == 3) {
                    nouvelleGrille[i][j] = true;
                } else {
                    nouvelleGrille[i][j] = false;
                }
            }
        }
    }
    grille = nouvelleGrille;
}

// bouvle principale du jeu

while (true) {
    afficheGrille();
    prochaineEtape();
}