var N = window.prompt("Saisissez un nombre entier ?");
N = parseInt(N);
var X = window.prompt("Saisissez un nombre entier ?");
X = parseInt(X);

for (i = 1; i <= N; i++) 
{
    resultat = i * X;
    document.write(i + "*" + X + "=" + resultat + "<br>");
}