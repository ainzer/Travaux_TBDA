// Ajouter un événement click à tous les Pokémon
const pokemons = document.querySelectorAll('.pokemon');
pokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // Récupérer le nom du pokémon
        const name = pokemon.querySelector('h2').textContent.toLowerCase();
        // Afficher une alerte avec le nom du pokémon
        alert(`Vous avez cliqué sur ${name} !`);
    });
});