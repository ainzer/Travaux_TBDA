function changerCouleur() {
    var p = document.getElementsByTagName("p")[0];
    var couleur = p.style.color;
    if (couleur == "red") {
        p.style.color = "blue";
    } else {
        p.style.color = "red"
    }
}