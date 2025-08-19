// ### 5. **Primeira Letra Única**

// Encontre o primeiro caractere que aparece apenas uma vez em uma string. Se não existir, retorne null.

// **Exemplos:**

// - `"abccba"` → `null` (todos se repetem)
// - `"abcdef"` → `"a"` (primeiro único)
// - `"hello"` → `"h"` (primeiro que aparece só uma vez)

function primeiraLetraUnica(s) {
  let stringVetorizada = s.split("");
  let mapeadorDeString = {};

  for (let char of stringVetorizada) {
    mapeadorDeString[char] = (mapeadorDeString[char] || 0) + 1;
  }

  for (let char of stringVetorizada) {
    if (mapeadorDeString[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(primeiraLetraUnica("lleho"));
