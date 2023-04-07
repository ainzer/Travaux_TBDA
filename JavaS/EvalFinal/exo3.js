// tableau de prénom
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// Prénom à chercher
var prenom = prompt("Entrez un prénom :");

// Recherche du prénom dans le tableau
var index = tab.indexOf(prenom);

if (index !== -1) {
    // Le prénom est trouvé : on le supprime du tableau
    tab.splice(index, 1);
    tab.push(""); // Mettre à blanc la dernière case
    alert("Le prénom " + prenom + " a été supprimé du tableau.");
} else {
    // Le prénom n'est pas trouvé : on affiche un message d'erreur
    alert("Le prénom " + prenom + " n'a pas été trouvé dans le tableau.");
}

// Affichage du tableau mis à jour
alert(tab);