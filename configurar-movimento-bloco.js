let blocoMover = null;

let clientXInicioDragBloco = null;
let clientXFimDragBloco = null;
let clientYInicioDragBloco = null;
let clientYFimDragBloco = null;

function limparDadosDragAndDropBloco() {
  clientXInicioDragBloco = null;
  clientYInicioDragBloco = null;
  clientXFimDragBloco = null;
  clientYFimDragBloco = null;
  blocoMover = null;
}

function configurarDragAndDropBloco(bloco) {
  function onMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();

    blocoMover = event.target;

    const isTouch = !!event.targetTouches;
    if (isTouch) {
      clientXInicioDragBloco = event.targetTouches[0].pageX;
      clientYInicioDragBloco = event.targetTouches[0].pageY;
    } else {
      clientXInicioDragBloco = event.clientX;
      clientYInicioDragBloco = event.clientY;
    }
  }

  bloco.addEventListener("mousedown", onMouseDown);
  bloco.addEventListener("touchstart", onMouseDown);

  function onMouseUp(event) {
    event.preventDefault();
    event.stopPropagation();

    const isTouch = !!event.targetTouches;
    if (isTouch) {
      clientXFimDragBloco = event.changedTouches[0].pageX;
      clientYFimDragBloco = event.changedTouches[0].pageY;
    } else {
      clientXFimDragBloco = event.clientX;
      clientYFimDragBloco = event.clientY;
    }

    const direcao = obterDirecaoDefinida({
      clientXInicio: clientXInicioDragBloco,
      clientXFim: clientXFimDragBloco,
      clientYInicio: clientYInicioDragBloco,
      clientYFim: clientYFimDragBloco,
      minimoDiferencaMover: 30,
    });

    const divCubo = document.querySelector(".cubo");
    const divsBlocos = Array.from(divCubo.querySelectorAll(".bloco"));
    const indiceBloco = divsBlocos.indexOf(blocoMover);

    const encontrouBloco = indiceBloco > -1;
    if (encontrouBloco) {
      if (direcao) {
        moverBloco(indiceBloco, direcao);
      }
    }

    limparDadosDragAndDropBloco();
  }

  bloco.addEventListener("mouseup", onMouseUp);
  bloco.addEventListener("touchend", onMouseUp);
}
