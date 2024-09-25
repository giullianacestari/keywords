import { PALAVRAS_RUINS } from "./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#entrada-de-texto").value;
  const campoResultado = document.querySelector("#resultado-palavrachave");
  const palavrasChave = processaTexto(texto);

  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
  let palavras = texto.split(/\P{L}+/u);

  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  palavras = tiraPalavrasRuins(palavras);

  const frequencias = contaFrequencia(palavras);

  // Ordena a palavra por frequência
  function ordenaPalavra(p1, p2) {
    return frequencias[p2] - frequencias[p1];
  }

  let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
  return ordenadas.slice(0, 10);
}

function tiraPalavrasRuins(palavras) {
  const palavrasBoas = [];
  for (let palavra of palavras) { // precisamos ensinar
    if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
      palavrasBoas.push(palavra);
    }
  }
  return palavrasBoas;
}

function contaFrequencia(palavras) {
  const frequencias = {};
  for (let palavra of palavras) {
    if (frequencias[palavra]) {
      frequencias[palavra]++;
    } else {
      frequencias[palavra] = 1;
    }
  }
  return frequencias;
}