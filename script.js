let botaoProcessarTexto = document.getElementById("processarTexto");

botaoProcessarTexto.addEventListener("click", function () {
  let texto = document.getElementById("textoEntrada").value;
  let palavras = texto.split(/\P{L}+/u);

  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  const frequencias = {};
  //console.log(palavras.length);

  for (let i in palavras) {
    let palavra = palavras[i];
    //console.log(palavra)
    if (frequencias[palavra]) {
      frequencias[palavra]++;
    } else {
      frequencias[palavra] = 1;
    }
  }

  // Ordena a palavra por frequência
  function ordenaPalavra(p1, p2) {
    return frequencias[p2] - frequencias[p1];
  }

  let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

  let resultado = document.getElementById("resultado");
  resultado.textContent = ordenadas.slice(0, 10).join(", ");
});
