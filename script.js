let botaoProcessarTexto = document.getElementById("processarTexto");

botaoProcessarTexto.addEventListener("click", function () {
  let texto = document.getElementById("textoEntrada").value;
  let palavras = texto.split(/\P{L}+/u);

  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  const frequencia = [];
  //console.log(palavras.length);

  for (let i in palavras) {
    let palavra = palavras[i];
    //console.log(palavra)
    if (frequencia[palavra]) {
      frequencia[palavra]++;
    } else {
      frequencia[palavra] = 1;
    }
  }
  console.log(frequencia);

  let resultado = document.getElementById("resultado");
  resultado.textContent = palavras.join(", ");
});
