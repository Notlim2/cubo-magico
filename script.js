let ladoAExibir = null;

let clientXInicioDrag = null;
let clientXFimDrag = null;
let clientYInicioDrag = null;
let clientYFimDrag = null;

const direcoes = {
  cima: "cima",
  direita: "direita",
  baixo: "baixo",
  esquerda: "esquerda",
};

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

function obterDirecaoDefinida({
  clientXInicio,
  clientXFim,
  clientYInicio,
  clientYFim,
  minimoDiferencaMover,
}) {
  const diferencaX = clientXInicio - clientXFim;
  const diferencaY = clientYInicio - clientYFim;

  const deveMover =
    Math.abs(diferencaX) > minimoDiferencaMover ||
    Math.abs(diferencaY) > minimoDiferencaMover;

  if (deveMover) {
    const moverEmX = Math.abs(diferencaX) > Math.abs(diferencaY);
    if (moverEmX) {
      const esquerda = diferencaX < 0;
      if (esquerda) {
        return direcoes.esquerda;
      } else {
        return direcoes.direita;
      }
    } else {
      const cima = diferencaY < 0;
      if (cima) {
        return direcoes.cima;
      } else {
        return direcoes.baixo;
      }
    }
  }
}

function moverCubo(direcao) {
  switch (direcao) {
    case direcoes.cima:
      ladoAExibir = ladoAExibir.cima;
      break;

    case direcoes.direita:
      ladoAExibir = ladoAExibir.direita;
      break;

    case direcoes.baixo:
      ladoAExibir = ladoAExibir.baixo;
      break;

    case direcoes.esquerda:
      ladoAExibir = ladoAExibir.esquerda;
      break;
  }

  exibirLadoCubo(ladoAExibir);
  limparDadosDragAndDrop();
}

function limparDadosDragAndDrop() {
  clientXInicioDrag = null;
  clientYInicioDrag = null;
  clientXFimDrag = null;
  clientYFimDrag = null;
}

function configurarDragAndDropCubo() {
  const root = document.querySelector("#root");
  root.addEventListener("mousedown", function (event) {
    clientXInicioDrag = event.clientX;
    clientYInicioDrag = event.clientY;
  });

  root.addEventListener("mouseup", function (event) {
    clientXFimDrag = event.clientX;
    clientYFimDrag = event.clientY;

    const direcao = obterDirecaoDefinida({
      clientXInicio: clientXInicioDrag,
      clientXFim: clientXFimDrag,
      clientYInicio: clientYInicioDrag,
      clientYFim: clientYFimDrag,
      minimoDiferencaMover: 100,
    });

    if (direcao) {
      moverCubo(direcao);
    }
  });
}

function moverBloco(bloco, direcao) {}

function configurarDragAndDropBloco(bloco) {
  bloco.addEventListener("mousedown", function (event) {
    clientXInicioDrag = event.clientX;
    clientYInicioDrag = event.clientY;
  });

  bloco.addEventListener("mouseup", function (event) {
    const bloco = event.target;
    clientXFimDrag = event.clientX;
    clientYFimDrag = event.clientY;

    const direcao = obterDirecaoDefinida({
      clientXInicio: clientXInicioDrag,
      clientXFim: clientXFimDrag,
      clientYInicio: clientYInicioDrag,
      clientYFim: clientYFimDrag,
      minimoDiferencaMover: 50,
    });

    if (direcao) {
      moverBloco(bloco, direcao);
    }
  });
}

configurarDragAndDropCubo();
exibirLadoCubo(ladoAExibir);
