var nbnom = 0;
do {
    nbnom++;
    var prenom = window.prompt("Saisissez lz prénom N°" + nbnom + "\n" + "ou Clic sur Annuler pour arrêter la saisie");
    nbnom = parseInt(nbnom);
    var i = prenom;
} while (i != false);
nbnom--;
alert("Le nombre de prénom est : " + nbnom);
