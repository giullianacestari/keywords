const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#entrada-de-texto").value;
  const campoResultado = document.querySelector("#resultado-palavrachave");

  let palavras = texto.split(" ");

  campoResultado.textContent = palavras.join(", ");
}
