let sum = 0;
let count = 0;
let input;

do {
    input = parseInt(prompt("Entrez un entier  (0 pour arrêter la saisie) :"));
    if (input !== 0) {
        sum += input;
        count++;
    }
} while (input !== 0);

let average = sum / count;

alert("La somme est : " + sum + "\n" + "La moyenne est : " + average);