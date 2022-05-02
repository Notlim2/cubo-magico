let ladoAExibir = null;

function exibirLadoCubo(lado) {
  let ladoExibir = lado;
  if (!ladoExibir) {
    const numLadoExibir = Math.ceil(Math.random() * 6);
    ladoAExibir = ladoExibir = cubo.lados[numLadoExibir - 1];
  }

  const divCubo = document.querySelector(".cubo");
  const divsBlocos = divCubo.querySelectorAll(".bloco");
  for (let divBloco of divsBlocos) {
    divBloco.remove();
  }

  for (let bloco of ladoExibir.blocos) {
    const divBloco = document.createElement("div");
    divBloco.classList.add("bloco");
    divBloco.style.backgroundColor = bloco;

    configurarDragAndDropBloco(divBloco);

    divCubo.appendChild(divBloco);
  }
}
