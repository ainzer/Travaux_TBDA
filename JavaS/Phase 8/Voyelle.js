var mot;
var nb_voyelles;
var compteur;

mot = prompt("Saisissez un mot : ")
//Conversion en MAJ
mot = mot.toUpperCase();
//Initialisation des VAR
nb_voyelles = 0;
for (compteur = 0; compteur <= mot.length; compteur++) {
    switch (mot.charAt(compteur)) {
        case "A":
            nb_voyelles = nb_voyelles + 1;
        break;
        case "E":
            nb_voyelles = nb_voyelles + 1;
        break;
        case "I" :
            nb_voyelles = nb_voyelles + 1;
        break;
        case "O" :
            nb_voyelles = nb_voyelles + 1;
        break;
        case "U" :
            nb_voyelles = nb_voyelles + 1;
        break;
        case "Y" :
            nb_voyelles = nb_voyelles +1;
        break;            
    }
}
//Affichage
alert("nombre de voyelles : " + nb_voyelles);
location.reload();