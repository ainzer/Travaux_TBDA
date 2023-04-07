// Récupération de toutes les cases du Sudoku
const cells = document.querySelectorAll('.cell');

// Ajout d'un écouteur d'événement pour chaque case
cells.forEach(cell => {
	cell.addEventListener('input', event => {
		// Empêcher la saisie de caractères autres que les chiffres
		if (!/^\d$/.test(cell.value)) {
			cell.value = '';
		}
	});
});
