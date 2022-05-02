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
