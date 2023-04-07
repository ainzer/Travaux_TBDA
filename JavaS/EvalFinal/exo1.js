let age;
let nbMoins20 = 0;
let nbEntre20et40 = 0;
let nbPlus40 = 0;

do {
  age = parseInt(prompt("Entrez un âge (ou entrez 100 pour terminer) :"));
  
  if (age < 20) {
    nbMoins20++;
  } else if (age >= 20 && age <= 40) {
    nbEntre20et40++;
  } else if (age > 40) {
    nbPlus40++;
  }
} while (age != 100);

alert("Nombre de personnes d'âge strictement inférieur à 20 ans : " + nbMoins20 + "\nNombre de personnes d'âge compris entre 20 ans et 40 ans : " + nbEntre20et40 + "\nNombre de personnes d'âge strictement supérieur à 40 ans : " + nbPlus40);

