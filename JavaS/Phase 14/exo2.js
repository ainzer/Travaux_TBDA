// générer un nombre aléatoire entre 1 et 100
var magicNumber = Math.floor(Math.random() * 100) + 1;

function verif() {
    // récupérer la valeur saisie par l'utilisateur
    var userNumber = parseInt(document.getElementById("textBox1").value);

    // vérifier si le nombre est correct
    if (userNumber === magicNumber) {
        document.getElementById("label1").innerHTML = "Félicitation, vous avez trouvé le nombre magique !";
    } else if (userNumber > magicNumber) {
        document.getElementById("label1").innerHTML = "Trop grand ! Essayer encore.";
    } else {
        document.getElementById("label1").innerHTML = "Trop petit ! Essayer encore.";
    }
}

// ajouter un écouteur d'événement au bouton
document.getElementById("button1").addEventListener("click", verif);
