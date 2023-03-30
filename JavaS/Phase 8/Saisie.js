var nbnom = 0;
do {
    nbnom++;
    var prenom = window.prompt("Saisissez le prénom N°" + nbnom + "\n" + "Laisser le champ vide et appuyer sur entrer");
    nbnom = parseInt(nbnom);
    var i = prenom;
} while (i != false);
nbnom--;
alert("Le nombre de prénom est : " + nbnom);
location.reload();