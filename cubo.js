class Cubo {
  lados = [];

  constructor(_lados) {
    this.lados = _lados;
  }
}

class Lado {
  blocos = [];

  cima = null;
  direita = null;
  baixo = null;
  esquerda = null;

  constructor(_blocos) {
    this.blocos = _blocos;
  }
}

const cores = {
  branco: "#fff",
  azul: "#00f",
  laranja: "#f80",
  amarelo: "#fe0",
  vermelho: "#f00",
  verde: "#0f0",
};

const numBlocosPorLado = 9;

const ladoBranco = new Lado(Array(numBlocosPorLado).fill(cores.branco));
const ladoAzul = new Lado(Array(numBlocosPorLado).fill(cores.azul));
const ladoLaranja = new Lado(Array(numBlocosPorLado).fill(cores.laranja));
const ladoAmarelo = new Lado(Array(numBlocosPorLado).fill(cores.amarelo));
const ladoVermelho = new Lado(Array(numBlocosPorLado).fill(cores.vermelho));
const ladoVerde = new Lado(Array(numBlocosPorLado).fill(cores.verde));

ladoBranco.cima = ladoVermelho;
ladoBranco.direita = ladoVerde;
ladoBranco.baixo = ladoLaranja;
ladoBranco.esquerda = ladoAzul;

ladoAzul.cima = ladoBranco;
ladoAzul.direita = ladoLaranja;
ladoAzul.baixo = ladoAmarelo;
ladoAzul.esquerda = ladoVermelho;

ladoLaranja.cima = ladoBranco;
ladoLaranja.direita = ladoVerde;
ladoLaranja.baixo = ladoAmarelo;
ladoLaranja.esquerda = ladoAzul;

ladoVerde.cima = ladoBranco;
ladoVerde.direita = ladoVermelho;
ladoVerde.baixo = ladoAmarelo;
ladoVerde.esquerda = ladoLaranja;

ladoVermelho.cima = ladoAmarelo;
ladoVermelho.direita = ladoAzul;
ladoVermelho.baixo = ladoBranco;
ladoVermelho.esquerda = ladoVerde;

ladoAmarelo.cima = ladoLaranja;
ladoAmarelo.direita = ladoVerde;
ladoAmarelo.baixo = ladoVermelho;
ladoAmarelo.esquerda = ladoAzul;

const cubo = new Cubo([
  ladoBranco,
  ladoAzul,
  ladoLaranja,
  ladoAmarelo,
  ladoVermelho,
  ladoVerde,
]);
