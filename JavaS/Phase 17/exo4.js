// Saisie du prix unitaire et de la quantité commandée
const PU = parseFloat(prompt("Entrez le prix unitaire :"));
const QTECOM = parseInt(prompt("Entrez la quantité commandée :"));

// Calcul du total sans remise
const TOT = PU * QTECOM;

// Calcul de la remise
let REM;
if (TOT >= 100 && TOT <= 200) {
    REM = TOT * 0.05;
    REM_PERCENT = "5%";
} else if (TOT > 200) {
    REM = TOT * 0.1;
    REM_PERCENT = "10%";
} else {
    REM = 0;
    REM_PERCENT = "0%";
}

// Calcul du total avec remise
const TOTREM = TOT - REM;

// Calcul des frais de port
let PORT;
if (TOTREM > 500) {
    PORT = 0;
} else {
    PORT = TOTREM * 0.02;
    if (PORT < 6) {
        PORT = 6;
    }
}

// Calcul du prix à payer
const PAP = TOTREM + PORT;

// Affichage des résultats
document.write("Le total est de " + TOT.toFixed(2) + " €" + "<br>");
document.write("La remise est de " + REM.toFixed(2) + " € (" + REM_PERCENT + ")" + "<br>");
document.write("Le total remisé est de " + TOTREM.toFixed(2) + " €" + "<br>");
document.write("Les frais de port sont de " + PORT.toFixed(2) + " €" + "<br>");
document.write("Le prix à payer est de " + PAP.toFixed(2) + " €" + "<br>");