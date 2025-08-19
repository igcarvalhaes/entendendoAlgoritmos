//"Implemente um algoritmo para determinar se uma string não tem caracteres repetidos

// Eu preciso normalizar a captalizacao dos caracteres, usando touppercase

function caracterNaoRepetido(palavra) {
  let palavraNormalizada = palavra.toLowerCase();
  let palavraNormalizadaSeparada = palavraNormalizada.split("");

  const palavraRepetida = "Essa palavra possui caracter repetido.";
  const palavraNaoRepetida = "Essa palavra não possui caracter repetido.";

  for (let i = 0; i <= palavraNormalizadaSeparada.length - 1; i++) {
    for (let j = i + 1; j <= palavraNormalizadaSeparada.length - 1; j++) {
      if (palavraNormalizadaSeparada[i] === palavraNormalizadaSeparada[j]) {
        return palavraRepetida;
      }
    }
  }
  return palavraNaoRepetida;
}

let word = "amor";

console.log(caracterNaoRepetido(word));
