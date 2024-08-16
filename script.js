// Palavras ruins - preposições, artigos, etc
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
]);

// Palavras com o mesmo significado
const palavrasAgrupadas = {
  tecnológic: "tecnologia",
  tecnologi: "tecnologia",
  computador: "computação",
  computacional: "computação",

  // adicionar mais
};

// Tenta extrair a raiz da palavra
function stem(palavra) {
  // Plurais "s", "es", "is"
  if (palavra.endsWith("es") || palavra.endsWith("is")) {
    palavra = palavra.slice(0, -2);
  } else if (palavra.endsWith("s")) {
    palavra = palavra.slice(0, -1);
  }

  // Terminações feminino e masculino "a", "o"
  if (palavra.endsWith("a") || palavra.endsWith("o")) {
    palavra = palavra.slice(0, -1);
  }

  // Verbos no infinitivo "ar", "er", "ir"
  if (
    palavra.endsWith("ar") ||
    palavra.endsWith("er") ||
    palavra.endsWith("ir")
  ) {
    palavra = palavra.slice(0, -2);
  }

  // Diminutivos "inho", "inha"
  if (palavra.endsWith("inh")) {
    palavra = palavra.slice(0, -3);
  }

  return palavra;
}

function pegaPalavrasChave(texto) {
  // Quebra o texto em palavras com regex
  let palavras = texto.split(/[\W_]+/);

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

  // Aplica stemming e agrupa palavras de mesmo significado
  for (let i = 0; i < palavrasFiltradas.length; i++) {
    let palavraReduzida = stem(palavrasFiltradas[i]);

    // Verifica se a palavra está no grupo de palavras agrupadas
    if (palavrasAgrupadas[palavraReduzida]) {
      palavrasFiltradas[i] = palavrasAgrupadas[palavraReduzida];
    } else {
      palavrasFiltradas[i] = palavraReduzida;
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
  let palavrasRelevantes = [];
  for (let palavra in frequencia) {
    palavrasRelevantes.push([palavra, frequencia[palavra]]);
  }
  palavrasRelevantes.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Pega apenas as palavras-chave
  let resultado = [];

  // ! Aqui depois podemos delimitar a quantidade de palavras (let i = 0; i < 5; i++)
  for (let i = 0; i < palavrasRelevantes.length; i++) {
    resultado.push(palavrasRelevantes[i][0]);
  }

  return resultado;
}

// Faz a verificação quando o botão é clicado e adiciona o resultado ao HTML
document
  .getElementById("processarTexto")
  .addEventListener("click", function () {
    const textoEntrada = document.getElementById("textoEntrada").value;
    const palavrasRelevantes = pegaPalavrasChave(textoEntrada);
    document.getElementById("resultado").textContent = `PALAVRAS-CHAVE:  ${palavrasRelevantes.join(", ")}`;
  });
