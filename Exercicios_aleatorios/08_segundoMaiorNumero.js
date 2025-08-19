// ### 7. **Segundo Maior Número**

// Encontre o segundo maior número em um array de inteiros. Se não existir, retorne uma mensagem apropriada.

// **Exemplos:**

// - `[1, 5, 3, 9, 2]` → `5`
// - `[10, 10, 10]` → `"Não existe segundo maior"`
// - `[7]` → `"Array muito pequeno"`

// Procuro o maior valor do vetor, depois diminuo esse maior valor do vetor pelos outros numeros, o resultado da divisao que tiver o menor valor é o segundo maior numero

function segundoMaiorNumero(arr) {
  if (arr.length <= 1) {
    return `Array muito pequeno`;
  }

  let maiorN = -Infinity;
  let segundoMaiorN = -Infinity;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > maiorN) {
      segundoMaiorN = maiorN;
      maiorN = arr[i];
    }
  }

  //  Verificar se segundoMaiorN não alterou de valor
  if (segundoMaiorN === -Infinity) {
    return `Não existe segundo maior`;
  }

  return segundoMaiorN;
}

console.log(segundoMaiorNumero([1, 5, 3, 9, 2]));
