function tableMultiplication() {
  let nombre;

  do {
    nombre = prompt("Entrez un nombre pour afficher sa table de multiplication :");
  } while (isNaN(nombre) || nombre === "");

  nombre = Number(nombre);

  for (let i = 1; i <= 10; i++) {
    document.write(`${i} x ${nombre} = ${i * nombre}` + "<br>");
  }
}
tableMultiplication();