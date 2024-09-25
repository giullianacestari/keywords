const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector('#entrada-de-texto').value;
  const campoResultado = document.querySelector('#resultado-palavrachave');
  const palavrasChave = processaTexto(texto);

  campoResultado.textContent = palavrasChave.join(', ');
}

function processaTexto(texto){
  let palavras = texto.split(/\P{L}+/u);

  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  contaFrequencia(palavras);

  return palavras;

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
  console.log(frequencias);
}