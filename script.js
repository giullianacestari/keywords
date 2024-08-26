let botaoProcessarTexto = document.getElementById("processarTexto");

botaoProcessarTexto.addEventListener("click", function () {
  let texto = document.getElementById("textoEntrada").value;
  let palavras = texto.split(/\s+/);

  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  const frequencia = [];

  for (let i in palavras) {
    let palavra = palavras[i];
    if (frequencia[palavra]) {
      frequencia[palavra]++;
    } else {
      frequencia[palavra] = 1;
    }
  }

  // Ordena as palavras por frequência
  let palavrasOrdenadas = [];
  for (let palavra in frequencia) {
    palavrasOrdenadas.push([palavra, frequencia[palavra]]);
  }
  palavrasOrdenadas.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Pega as 10 palavras mais frequentes
  palavrasOrdenadas = palavrasOrdenadas.slice(0, 10);

  // Se há palavra radicalizada entre as 10 mais frequentes:
  if (palavrasOrdenadas) {
    // Volta a palavra pra forma original, descrita em palavrasAgrupadas
    palavrasOrdenadas = palavras;
  }

  let resultado = document.getElementById("resultado");
  resultado.textContent = palavras.join(", ");
});
