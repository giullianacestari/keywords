let botaoProcessarTexto = document.getElementById("processarTexto");

botaoProcessarTexto.addEventListener("click", function () {
  let texto = document.getElementById("textoEntrada").value;
  let palavras = texto.split(/\s+/);

  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].toLowerCase();
  }

  const frequencia = [];
  //console.log(palavras.length);

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    if (palavra) {
      //console.log(palavra)
      if (frequencia[palavra]) {
        frequencia[palavra]++;
      } else {
        frequencia[palavra] = 1;
      }
    }
  }
  //console.log(frequencia);

  let resultado = document.getElementById("resultado");
  resultado.textContent = palavras.join(", ");
});
