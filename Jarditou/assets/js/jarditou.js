const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire


    // Vérifie le champ Nom
    const nom = document.getElementById('Nom');
    const nomValue = nom.value.trim();
    if (nomValue === '') {
        const error = document.createElement('p');
        error.textContent = 'Veuillez saisir votre nom.';
        nom.insertAdjacentElement('afterend', error);
        return;
    }

    // Envoie le formulaire si tout est valide
    form.submit();
});