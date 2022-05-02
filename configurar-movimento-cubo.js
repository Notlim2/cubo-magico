let clientXInicioDragCubo = null;
let clientXFimDragCubo = null;
let clientYInicioDragCubo = null;
let clientYFimDragCubo = null;

function limparDadosDragAndDropCubo() {
  clientXInicioDragCubo = null;
  clientYInicioDragCubo = null;
  clientXFimDragCubo = null;
  clientYFimDragCubo = null;
}

function configurarDragAndDropCubo() {
  const root = document.querySelector("#root");

  function onMouseDown(event) {
    const isTouch = !!event.targetTouches;
    if (isTouch) {
      clientXInicioDragCubo = event.targetTouches[0].pageX;
      clientYInicioDragCubo = event.targetTouches[0].pageY;
    } else {
      clientXInicioDragCubo = event.clientX;
      clientYInicioDragCubo = event.clientY;
    }
  }

  root.addEventListener("mousedown", onMouseDown);
  root.addEventListener("touchstart", onMouseDown);

  function onMouseUp(event) {
    const isTouch = !!event.targetTouches;
    if (isTouch) {
      clientXFimDragCubo = event.changedTouches[0].pageX;
      clientYFimDragCubo = event.changedTouches[0].pageY;
    } else {
      clientXFimDragCubo = event.clientX;
      clientYFimDragCubo = event.clientY;
    }

    const direcao = obterDirecaoDefinida({
      clientXInicio: clientXInicioDragCubo,
      clientXFim: clientXFimDragCubo,
      clientYInicio: clientYInicioDragCubo,
      clientYFim: clientYFimDragCubo,
      minimoDiferencaMover: 100,
    });

    if (direcao) {
      moverCubo(direcao);
    }

    limparDadosDragAndDropCubo();
  }

  root.addEventListener("mouseup", onMouseUp);
  root.addEventListener("touchend", onMouseUp);
}
