let taille = parseInt(prompt("Entrez la taille du tableau : "));
let tableau = [];

for (let i = 0; i < taille; i++) {
    let valeur = prompt("Entrez la valeur numéro " + (i+1) + " : ");
    tableau.push(valeur);
}

document.write("Le contenu du tableau est :" + "<br>");
document.write(tableau);