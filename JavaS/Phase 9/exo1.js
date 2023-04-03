// Définir la fonction produit
function Produit(x, y) {
    return x * y;
}

// Définir la fonction AfficheImg
function AfficheImg(imagePath) {
    const img = new Image();
    img.src = imagePath;
    document.body.appendChild(img);
}

// Demander à l'utilisateur de saisir deux nombres
const x = parseFloat(prompt("Entrez le premier nombre :"));
const y = parseFloat(prompt("Entrez le euxième nombre :"));

// Utiliser les fonctions
const resultatProduit = Produit(x, y);
const resultatDiv = document.createElement("div");
resultatDiv.innerHTML = `Le produit de ${x} et ${y} est : ${resultatProduit}`;
document.body.appendChild(resultatDiv);

const imagePath = "papillon.jpg";
AfficheImg(imagePath);