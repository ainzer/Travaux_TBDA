const numJoueurs = parseInt(prompt("Combien de joueurs participent à la partie ? "));
const personnages = [];

for (let i = 0; i < numJoueurs; i++) {
  console.log(`Création de la fiche de personnage pour le joueur ${i + 1}`);
  const nom = prompt("Nom : ");
  const classe = prompt("Classe : ");
  const race = prompt("Race : ");
  const niveau = parseInt(prompt("Niveau : "));
  const stats = {
    force: parseInt(prompt("Force : ")),
    dexterite: parseInt(prompt("Dextérité : ")),
    constitution: parseInt(prompt("Constitution : ")),
    intelligence: parseInt(prompt("Intelligence : ")),
    sagesse: parseInt(prompt("Sagesse : ")),
    charisme: parseInt(prompt("Charisme : ")),
  };
  const sorts = [];
  const nbSorts = parseInt(prompt("Combien de sorts connaissez-vous ?"));
  for (let j = 0; j < nbSorts; j++) {
    sorts.push(prompt(`Sort ${j + 1} : `));
  }
  const equipement = [];
  const nbEquipement = parseInt(prompt("Combien d'équipements possédez-vous ?"));
  for (let j = 0; j < nbEquipement; j++) {
    equipement.push(prompt(`Équipement ${j + 1} : `));
  }
  // Ajoute les informations du personnage à la liste des personnages
  personnages.push({
    Nom: nom,
    Classe: classe,
    Race: race,
    Niveau: niveau,
    Stats: stats,
    Sorts: sorts,
    Equipement: equipement,
  });
}

// Affiche toutes les fiches de personnage créées
personnages.forEach((perso, i) => {
  console.log(`Fiche de personnage pour le joueur ${i + 1}`);
  console.log(`Nom : ${perso.Nom}`);
  console.log(`Classe : ${perso.Classe}`);
  console.log(`Race : ${perso.Race}`);
  console.log(`Niveau : ${perso.Niveau}`);
  console.log("Stats :");
  console.log(`  Force : ${perso.Stats.force}`);
  console.log(`  Dextérité : ${perso.Stats.dexterite}`);
  console.log(`  Constitution : ${perso.Stats.constitution}`);
  console.log(`  Intelligence : ${perso.Stats.intelligence}`);
  console.log(`  Sagesse : ${perso.Stats.sagesse}`);
  console.log(`  Charisme : ${perso.Stats.charisme}`);
  console.log(`Sorts : ${perso.Sorts.join(", ")}`);
  console.log(`Équipement : ${perso.Equipement.join(", ")}`);
});