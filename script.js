const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector('#entrada-de-texto').value;
  const campoResultado = document.querySelector('#resultado-palavrachave');
  const palavrasChave = quebraEmPalavras(texto);

  campoResultado.textContent = palavrasChave.join(', ');
}

function quebraEmPalavras(texto){
  let palavras = texto.split(/\P{L}+/u);
  return palavras;
}