// Vérification des contraintes
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    let codePostalInput = document.getElementById("codepostal");
    let codePostal = codePostalInput.value;
    if (!/^\d{5}$/.test(codePostal)) {
        alert("Le code postal doit comporter 5 caractères numériques.");
        event.preventDefault();
        codePostalInput.focus();
        return;
    }
    
    let emailInput = document.getElementById("email");
    let email = emailInput.value;
    if (!email.includes("@")) {
        alert("L'adresse email doit comporter au moins le caractère '@'.");
        event.preventDefault();
        emailInput.focus();
        return;
    }

    let environnementSelect = document.getElementById("environnement");
    let environnementTexte = document.getElementById("environnement-texte");
    if (environnementSelect.value == "Choisissez") {
        alert("Veuillez sélectionner une option pour l'environnement technique.");
        event.preventDefault();
        environnementSelect.focus();
        return;
    }
    if (environnementSelect.value != "Autre") {
        environnementTexte.value = environnementSelect.value;
    } else {
        if (environnementTexte.value == "Choisissez" || environnementTexte.value == "") {
            alert("Veuillez préciser les techniques utilisées.");
            event.preventDefault();
            environnementTexte.focus();
            return;
        }
    }
});