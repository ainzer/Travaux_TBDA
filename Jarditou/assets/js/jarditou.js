 // Récupération des champs du formulaire
 const nom = document.getElementById("Nom");
 const prenom = document.getElementById("Prenom");
 const email = document.getElementById("email");
 const sujet = document.getElementById("sujet");
 const sujetTexte = document.getElementById("sujet-texte");
 const checkbox = document.querySelector("input[type=checkbox]");

 // Fonction pour vérifier si un champ est vide
 function estVide(champ) {
   return champ.value.trim() === "";
 }

 // Fonction pour afficher un message d'erreur sous un champ
 function afficherErreur(champ, message) {
   const divErreur = document.createElement("div");
   divErreur.className = "text-danger";
   divErreur.innerText = message;
   champ.insertAdjacentElement("afterend", divErreur);
 }

 // Fonction pour vérifier le formulaire avant envoi
 function validerFormulaire(event) {
   // Vérification du nom
   if (estVide(nom)) {
     afficherErreur(nom, "Veuillez saisir votre nom.");
     event.preventDefault();
   }

   // Vérification du prénom
   if (estVide(prenom)) {
     afficherErreur(prenom, "Veuillez saisir votre prénom.");
     event.preventDefault();
   }

   // Vérification de l'email
   if (estVide(email)) {
     afficherErreur(email, "Veuillez saisir votre email.");
     event.preventDefault();
   } else if (!email.checkValidity()) {
     afficherErreur(email, "Veuillez saisir un email valide.");
     event.preventDefault();
   }

   // Vérification du sujet
   if (sujet.value === "Sujet") {
     afficherErreur(sujet, "Veuillez sélectionner un sujet.");
     event.preventDefault();
   }

   // Vérification du texte du sujet
   if (estVide(sujetTexte)) {
     afficherErreur(sujetTexte, "Veuillez saisir votre question.");
     event.preventDefault();
   }

   // Vérification de la checkbox
   if (!checkbox.checked) {
     afficherErreur(checkbox.parentNode, "Veuillez accepter le traitement informatique.");
     event.preventDefault();
   }
 }

 // Ajout d'un écouteur d'événement sur le formulaire
 const formulaire = document.querySelector("form");
 formulaire.addEventListener("submit", validerFormulaire);