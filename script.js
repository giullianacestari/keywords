// Busca o botão
let botaoProcessarTexto = document.getElementById("processarTexto");

botaoProcessarTexto.addEventListener("click", function () {
  let textoEntrada = document.getElementById("textoEntrada").value;
  let palavrasChave = pegaPalavrasChave(textoEntrada);
  let resultado = document.getElementById("resultado");
  resultado.textContent = palavrasChave.join(", ");
});

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
  alun: "aluno",
  // adicionar mais e reconhecer limites dessa alternativa
};

function pegaPalavrasChave(texto) {
  // Quebra o texto em palavras com regex
  let palavras = texto.split(/\P{L}+/u);

  // Converte todas as palavras para minúsculas
  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  // Remove as palavras ruins
  let palavrasBoas = [];
  for (let i in palavras) {
    if (!palavrasRuins.has(palavras[i]) && palavras[i].length > 2) {
      palavrasBoas.push(palavras[i]);
    }
  }

  // Aplica stemming e agrupa palavras de mesmo significado
  for (let i in palavrasBoas) {
    let palavraReduzida = palavrasBoas[i];

    // Se a palavra reduzida está no grupo de palavras agrupadas (de mesmo significado):
    if (palavrasAgrupadas[palavraReduzida]) {
      palavrasBoas[i] = palavrasAgrupadas[palavraReduzida];
    } else {
      palavrasBoas[i] = palavraReduzida;
    }
  }

  // Conta a frequência de cada palavra
  const frequencia = {};
  for (let i in palavrasBoas) {
    let palavra = palavrasBoas[i];
    if (frequencia[palavra]) {
      frequencia[palavra]++;
    } else {
      frequencia[palavra] = 1;
    }
  }

  // Ordena as palavras por frequência
  let palavrasOrdenadas = [];
  for (let palavra in frequencia) {
    palavrasOrdenadas.push([palavra, frequencia[palavra]]);
  }
  palavrasOrdenadas.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Pega as 10 palavras mais frequentes
  palavrasOrdenadas = palavrasOrdenadas.slice(0, 10);

  // Se há palavra radicalizada entre as 10 mais frequentes:
  if (palavrasOrdenadas.includes(palavrasBoas)) {
    // Volta a palavra pra forma original, descrita em palavrasAgrupadas
    palavrasOrdenadas = palavrasAgrupadas;
  }

  // Pega apenas as palavras-chave
  let resultado = [];

  for (let i in palavrasOrdenadas) {
    resultado.push(palavrasOrdenadas[i][0]);
  }

  return resultado;
}

