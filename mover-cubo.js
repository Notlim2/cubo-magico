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
}
