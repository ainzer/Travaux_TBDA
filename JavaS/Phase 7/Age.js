var annee = window.prompt("Saisissez votre année de naissance : ");
var latedate = new Date();
var age = latedate.getFullYear() - annee;
age = parseInt(age);
if (age >= 18)
{
    alert("Vous avez : " + age + "ans" + "\n" + "vous êtes majeur");
}
else
{
    alert("Vous avez : " + age + "ans" + "\n" + "vous êtes mineur");
}
