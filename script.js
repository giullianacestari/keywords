const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
  let texto = document.querySelector('#entrada-de-texto').value;

  let campoResultado = document.querySelector('#resultado-palavrachave');

  let palavras = texto.split(' ');

  campoResultado.textContent = palavras.join(' ');
}