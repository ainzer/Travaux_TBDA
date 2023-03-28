var cpt = 1;
var nb = window.prompt("Saisissez un nombre Entier : ")
while (cpt < nb) {
    if (cpt == 0) {
        cpt++
        continue;
    }
    
    document.write("Nombre : " + cpt + "<br>");
    cpt++;
}

