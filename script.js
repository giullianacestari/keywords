let botaoProcessarTexto = document.getElementById('processarTexto');
//console.log(botaoProcessarTexto)

botaoProcessarTexto.addEventListener('click', function () {
//console.log('Clicou no botão')

let texto = document.getElementById('textoEntrada').value;
//console.log(texto.value)

let resultado = document.getElementById('resultado');
//console.log(resultado)

let palavras = texto.split(/\s+/);
console.log(palavras[0])
resultado.textContent = palavras.join(', ');
});