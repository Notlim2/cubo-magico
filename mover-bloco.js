function moverBloco(indiceBloco, direcao) {
  const moverEmY = direcao === direcoes.cima || direcao === direcoes.baixo;
  if (moverEmY) {
    // Obter primeiro e ultimoIndiceAMover
  } else {
    const ultimoIndiceAMover =
      Math.ceil((indiceBloco + 1) / raizBlocosPorLado) * raizBlocosPorLado;
    const primeiroIndiceAMover = ultimoIndiceAMover - raizBlocosPorLado;

    if (direcao === direcoes.direita) {
      const coresPrimeiroLado = ladoAExibir.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado
      );

      const primeiroLadoADireita = ladoAExibir.direita;
      const coresSegundoLado = primeiroLadoADireita.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado,
        ...coresPrimeiroLado
      );

      const segundoLadoADireita = primeiroLadoADireita.direita;
      const coresTerceiroLado = segundoLadoADireita.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado,
        ...coresSegundoLado
      );

      const terceiroLadoADireita = segundoLadoADireita.direita;
      const coresQuartoLado = terceiroLadoADireita.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado,
        ...coresTerceiroLado
      );

      ladoAExibir.blocos.splice(primeiroIndiceAMover, 0, ...coresQuartoLado);
    } else {
      const coresPrimeiroLado = ladoAExibir.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado
      );

      const primeiroLadoAEsquerda = ladoAExibir.esquerda;
      const coresSegundoLado = primeiroLadoAEsquerda.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado,
        ...coresPrimeiroLado
      );

      const segundoLadoAEsquerda = primeiroLadoAEsquerda.esquerda;
      const coresTerceiroLado = segundoLadoAEsquerda.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado,
        ...coresSegundoLado
      );

      const terceiroLadoAEsquerda = segundoLadoAEsquerda.esquerda;
      const coresQuartoLado = terceiroLadoAEsquerda.blocos.splice(
        primeiroIndiceAMover,
        raizBlocosPorLado,
        ...coresTerceiroLado
      );

      ladoAExibir.blocos.splice(primeiroIndiceAMover, 0, ...coresQuartoLado);
    }
  }

  exibirLadoCubo(ladoAExibir);
}
