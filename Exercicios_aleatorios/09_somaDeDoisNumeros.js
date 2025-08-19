// ### 8. **Soma de Dois Números**

// Dado um array de números e um valor alvo, determine se existem dois números no array que somados resultem no valor alvo.

// **Exemplos:**

// - `[2, 7, 11, 15]` e alvo `9` → `true` (2 + 7 = 9)
// - `[3, 2, 4]` e alvo `6` → `true` (2 + 4 = 6)
// - `[1, 2, 3]` e alvo `7` → `false`

function somaDeDoisNumeros(arr, numero) {
  if (arr.length < 2) {
    return false;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === numero) {
        return true;
      }
    }
  }
  return false;
}

function somaDeDoisNumerosOtimizada(arr, alvo) {
  if (arr.length < 2) {
    return false;
  }

  const listaDeNumeros = new Set();
  for (let i = 0; i <= arr.length - 1; i++) {
    let numeroAtual = arr[i];
    let numerParceiro = alvo - numeroAtual;

    if (listaDeNumeros.has(numerParceiro)) {
      return true;
    }

    listaDeNumeros.add(numeroAtual);
  }

  return false;
}

console.log(somaDeDoisNumerosOtimizada([3, 2, 4], 6));
