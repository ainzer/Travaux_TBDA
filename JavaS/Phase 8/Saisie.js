var nbnom = 1
var prenom = window.prompt("Saisissez le prénom N°" + nbnom + "\n" + "ou Clic sur Annuler pour arrêter la saisie.");
for (i = 0; prenom != ""; i++) {
    nbnom++
    window.prompt("Saisissez le prénom N°" + nbnom + "\n" + "ou Clic sur Annuler pour arrêter la saisie.");
}
alert("Le nombre de prénom est de : " + nbnom);
