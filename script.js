import { PALAVRAS_RUINS } from "./palavrasRuins.js";

let botaoProcessarTexto = document.getElementById("processarTexto");

botaoProcessarTexto.addEventListener("click", function () {
  let texto = document.getElementById("textoEntrada").value;
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

  let resultado = document.getElementById("resultado");
  resultado.textContent = ordenadas.slice(0, 10).join(", ");
});

function tiraPalavrasRuins(palavras) {
  const boas = [];
  for (let palavra of palavras) {
    if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
      boas.push(palavra);
    }
  }
  return boas;
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
