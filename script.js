const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector('#entrada-de-texto').value;
  const campoResultado = document.querySelector('#resultado-palavrachave');

  let palavras = texto.split(/\P{L}+/u);

  contaFrequencia(palavras);

  campoResultado.textContent = palavras.join(', ');
}

function contaFrequencia(palavras) {
  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }


  const frequencias = {};
  for (let i in palavras) {
    let palavra = palavras[i];
    //console.log(palavra)
    if (frequencias[palavra]) {
      frequencias[palavra]++;
    } else {
      frequencias[palavra] = 1;
    }
  }
  console.log(frequencias);
}