function convert() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");

    if (input === "") {
        output.innerHTML = "Veuillez entrez une valeur en kiligrammes.";
        return;
    }

    var kg = parseFloat(input);
    var lbs = kg * 2.20462;
    var oz = kg * 36.274;
    
    output.innerHTML = kg + "kg = " + lbs.toFixed(2) + " livres = " + oz.toFixed(2) + "onces.";
}