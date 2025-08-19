// ### 9. **Array Rotacionado**

// Verifique se um array é uma rotação de outro array. Exemplo: [1,2,3,4,5] e [3,4,5,1,2].

// **Exemplos:**

// - `[1, 2, 3, 4, 5]` e `[3, 4, 5, 1, 2]` → `true`
// - `[1, 2, 3]` e `[2, 3, 1]` → `true`
// - `[1, 2, 3]` e `[1, 3, 2]` → `false`

function arrayRotacionado(arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }

  const arrDuplicado = [...arr, ...arr];

  const arrDuplicadoString = arrDuplicado.join(",");
  const arr2String = arr2.join(",");

  if (arrDuplicadoString.includes(arr2String)) {
    return true;
  }

  return false;
}

console.log(arrayRotacionado([1, 2, 3], [2, 3, 1]));
