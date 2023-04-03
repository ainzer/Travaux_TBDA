let valeurs = [];
let somme = 0;
let moyenne = 0;
let nbValeurs = 0;

while (true) {
    let valeur = window.prompt("Entrez une valeur numérique (0 pour arrêter) :");
    if (valeurs === null) {
        break; // L'utilisateur a annulé la saisie
    }
    valeur = parseFloat(valeur); // Conversion en nombre
    if (isNaN(valeur)) {
        window.alert("La valeur saisie n'est pas un nombre !");
        continue; // On passe à l'itération suivante
    }
    if (valeur === 0) {
        break; // Fin de la saisie
    }
    valeurs.push(valeur);
    somme += valeur;
    nbValeurs++;
}

if (nbValeurs > 0) {
    moyenne = somme / nbValeurs;
}

window.alert("Nombre de valeur saisie : " + nbValeurs + "\nSomme des valeurs : " + somme + "\nMoyenne des valeurs : " + moyenne);