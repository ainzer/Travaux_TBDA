let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    let emailInput = document.getElementById("email");
    let email = emailInput.value;
    if (!email.includes("@")) {
        alert("L'adresse email doit comporter au moins le caractère '@'.");
        event.preventDefault();
        emailInput.focus();
        return;
    }
    

    let sujetSelect = document.getElementById("Sujet");
    let sujetTexte = document.getElementById("sujet-texte");
    if (sujetSelect.value == "Sujet") {
        alert("Veuiller sélectionner une option pour le sujet.");
        event.preventDefault();
        sujetSelect.focus();
        return;
    }
    if (sujetSelect.value != "autre") {
        sujetTexte.value = sujetSelect.value;
    } else {
        if (sujetTexte.value == "Sujet" || sujetTexte.value == "") {
            alert("Veuiller préciser votre question.");
            event.preventDefault();
            sujetTexte.focus();
            return;
        }
    }
});