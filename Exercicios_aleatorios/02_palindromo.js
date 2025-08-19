/*
Implemente um algoritmo para verificar se uma string é um palíndromo(lê - se igual de frente para trás).Ignore espaços, pontuação e diferenças entre maiúsculas e minúsculas.
*/

function palindromo(s) {
  const stringNormalizada = s.toLowerCase().replace(/[^a-zA-Z0-9]/gi, "");

  for (i = 0; i <= stringNormalizada.length - 1; i++) {
    const inicio = i;
    const fim = stringNormalizada.length - 1 - i;

    if (stringNormalizada[inicio] !== stringNormalizada[fim]) {
      return false;
    }
  }
  return true;
}

console.log(palindromo("raceacar"));
