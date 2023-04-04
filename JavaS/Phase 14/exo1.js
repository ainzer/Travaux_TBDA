var element = document.getElementById("button").value;
const text = document.getElementById("text").value;
function validation()
{
    if(text.length < 1){
        alert("Veuillez entrer des caracteres !!");
        return false;
    }else
    {
        alert("Vous avez saisie : " + text);
    }
};