function strtok(str1, str2, n) {
    var words = str1.split(str2); // Séparer la chaine de caractéres en mots en utilisant le caractère de séparation str2
    return words[n-1]; // Renvoyer le nième mot correspondant à l'indice (n-1)
}

var str1 = "robert ;dupont ;amiens ;80000";
var str2 = ";";
var n = 3;

var result = strtok(str1, str2, n); // Renvoie "amiens"
alert(result); // Affiche "amiens"