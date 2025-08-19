// ## Arrays e Lógica

// ### 6. **Array Sem Duplicatas**

// Implemente uma função que remova elementos duplicados de um array mantendo apenas a primeira ocorrência de cada elemento.

// **Exemplos:**

// - `[1, 2, 2, 3, 4, 4, 5]` → `[1, 2, 3, 4, 5]`
// - `["a", "b", "a", "c"]` → `["a", "b", "c"]`

// preciso remover com splice(indice, quantos elementos quero remover)
// Solucao O(n^2)
// function arraySemDuplicata(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//       }
//     }
//   }
//   return arr;
// }

function arraySemDuplicata(arr) {
  let i = 1;
  let j = 0;

  while (i <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
    i++;
  }
  arr.length = j + 1;
  return arr;
}

console.log(arraySemDuplicata([1, 2, 2, 3, 4, 4, 5]));
