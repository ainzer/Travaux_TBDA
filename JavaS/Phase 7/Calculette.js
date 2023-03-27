var nb_1 = window.prompt("Saisissez votre 1° nombre entier");
nb_1 = parseInt(nb_1);
var nb_2 = window.prompt("Saisissez votre 2° nombre entier");
nb_2 = parseInt(nb_2);
var op = window.prompt("Saisissez un opérateur" + "\n" + "1 = addition" + "\n" + "2 = soustraction" + "\n" + "3 = multiplication" + "\n" + "4 = division");
op = parseInt(op);
var res;
if (op < 1 || op > 4) {
    alert("Erreur : veuillez choisir un chiffre de 1 a 4 !")
    location.reload()
}
else {
    if (op == 1) {
        op = nb_1 + nb_2
        alert("Vous avez fait cette opération : " + nb_1 + "+" + nb_2 + "\n" + "Le résultat : " + op);
        location.reload()
    }
    else if (op == 2) {
        op = nb_1 - nb_2
        alert("Vous avez fait cette opération : " + nb_1 + "-" + nb_2 + "\n" + "Le résultat : " + op);
        location.reload()
    }
    else if (op == 3) {
        op = nb_1 * nb_2
        alert("Vous avez fait cette opération : " + nb_1 + "*" + nb_2 + "\n" + "Le résultat : " + op);
        location.reload()
    }
    else if (op == 4) {
        if (nb_1 == 0 || nb_2 == 0) {
            alert("On ne peut pas divisé par 0 !!!!!")
            location.reload()
        }
        else {
            op = nb_1 / nb_2
            alert("Vous avez fait cette opération : " + nb_1 + "/" + nb_2 + "\n" + "Le résultat : " + op);
            location.reload()
        }
    }
}