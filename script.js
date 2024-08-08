// Palavras ruins
const palavrasRuins = new Set([
  "de",
  "a",
  "o",
  "e",
  "que",
  "do",
  "da",
  "em",
  "um",
  "para",
  "é",
  "com",
  "não",
  "uma",
  "os",
  "no",
  "se",
  "na",
  "por",
  "mais",
  "as",
  "dos",
  "como",
  "mas",
  "foi",
  "ao",
  "ele",
  "das",
  "tem",
  "à",
  "seu",
  "sua",
  "ou",
  "ser",
  "quando",
  "muito",
  "há",
  "nos",
  "já",
  "está",
  "eu",
  "também",
  "só",
  "pelo",
  "pela",
  "até",
  "isso",
  "ela",
  "entre",
  "era",
  "depois",
  "sem",
  "mesmo",
  "aos",
  "ter",
  "seus",
  "quem",
  "nas",
  "me",
  "esse",
  "eles",
  "estão",
  "você",
  "tinha",
  "foram",
  "essa",
  "num",
  "nem",
  "suas",
  "meu",
  "às",
  "minha",
  "têm",
  "numa",
  "pelos",
  "elas",
  "havia",
  "seja",
  "qual",
  "será",
  "nós",
  "tenho",
  "lhe",
  "deles",
  "essas",
  "esses",
  "pelas",
  "este",
  "fosse",
  "dele",
  "tu",
  "te",
  "vocês",
  "vos",
  "lhes",
  "meus",
  "minhas",
  "teu",
  "tua",
  "teus",
  "tuas",
  "nosso",
  "nossa",
  "nossos",
  "nossas",
  "dela",
  "delas",
  "esta",
  "estes",
  "estas",
  "aquele",
  "aquela",
  "aqueles",
  "aquelas",
  "isto",
  "aquilo",
  "estou",
  "está",
  "estamos",
  "estão",
  "estive",
  "esteve",
  "estivemos",
  "estiveram",
  "estava",
  "estávamos",
  "estavam",
  "estivera",
  "estivéramos",
  "esteja",
  "estejamos",
  "estejam",
  "estivesse",
  "estivéssemos",
  "estivessem",
  "estiver",
  "estivermos",
  "estiverem",
  "hei",
  "há",
  "havemos",
  "hão",
  "houve",
  "houvemos",
  "houveram",
  "houvera",
  "houvéramos",
  "haja",
  "hajamos",
  "hajam",
  "houvesse",
  "houvéssemos",
  "houvessem",
  "houver",
  "houvermos",
  "houverem",
  "houverei",
  "houverá",
  "houveremos",
  "houverão",
  "houveria",
  "houveríamos",
  "houveriam",
]);

// Palavras agrupadas
const palavrasAgrupadas = {
  programação: "programação",
  programador: "programação",
  programadora: "programação",
  computação: "computação",
  computador: "computação",
  computadores: "computação",
  computacional: "computação",
};

function pegaPalavrasChave(texto) {
  // Quebra o texto em palavras com regex
  let palavras = texto.split(/[^A-Za-z]+/);

  // Converte todas as palavras para minúsculas
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].toLowerCase();
  }

  // Remove palavras ruins
  let palavrasFiltradas = [];
  for (let i = 0; i < palavras.length; i++) {
    if (!palavrasRuins.has(palavras[i])) {
      palavrasFiltradas.push(palavras[i]);
    }
  }

  // Agrupa palavras (pato, pata, etc)
  for (let i = 0; i < palavrasFiltradas.length; i++) {
    if (palavrasAgrupadas[palavrasFiltradas[i]]) {
      palavrasFiltradas[i] = palavrasAgrupadas[palavrasFiltradas[i]];
    }
  }

  // Conta a frequência de cada palavra
  const frequencia = {};
  for (let i = 0; i < palavrasFiltradas.length; i++) {
    let palavra = palavrasFiltradas[i];
    if (palavra) {
      if (frequencia[palavra]) {
        frequencia[palavra]++;
      } else {
        frequencia[palavra] = 1;
      }
    }
  }

  // Ordena as palavras por frequência
  let palavrasImportantes = [];
  for (let palavra in frequencia) {
    palavrasImportantes.push([palavra, frequencia[palavra]]);
  }
  palavrasImportantes.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Pega apenas as palavras-chave
  let resultado = [];
  for (let i = 0; i < palavrasImportantes.length; i++) {
    resultado.push(palavrasImportantes[i][0]);
  }

  return resultado;
}

// Faz a verificação quando o botão é clicado e adiciona o resultado ao HTML
document.getElementById("processarTexto").addEventListener("click", () => {
  const textoEntrada = document.getElementById("textoEntrada").value;
  const palavrasImportantes = pegaPalavrasChave(textoEntrada);
  document.getElementById(
    "resultado"
  ).innerHTML = `<strong>Palavras Importantes:</strong> ${palavrasImportantes.join(
    ", "
  )}`;
});
