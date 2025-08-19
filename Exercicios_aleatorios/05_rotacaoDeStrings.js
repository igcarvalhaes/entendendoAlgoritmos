// Verifique se uma string é uma rotação de outra. Por exemplo: "abcde" e "cdeab" são rotações uma da outra.

// **Exemplos:**

// - `"abcde"` e `"cdeab"` → `true`
// - `"waterbottle"` e `"erbottlewat"` → `true`
// - `"hello"` e `"world"` → `false`

function rotacaoDeStrings(s, t) {
  //Verificar se as duas strings possuem o mesmo tamanho. Se forem diferentes já não são rotação uma da outra
  if (s.length !== t.length) {
    return false;
  }

  const normalizarCapsString1 = s.toLowerCase();
  const normalizarCapsString2 = t.toLowerCase();

  let string1Duplicada = normalizarCapsString1 + normalizarCapsString1;

  if (string1Duplicada.includes(normalizarCapsString2)) {
    return true;
  } else {
    return false;
  }

  //   // Transformar as duas strings em array de strings
  //   const arrayString1 = normalizarCapsString1.split("");
  //   const arrayString2 = normalizarCapsString2.split("");

  //   // Verificar se possuem a mesma quantidade caracteres
  //   for (let i = 0; i <= arrayString1.length - 1; i++) {
  //     if (arrayString1[i] === arrayString2[0]) {
  //       let elementosDoArrayAposOcaractere = arrayString1.slice(i);
  //       let elementosDoArrayAntesDoCaractere = arrayString1.slice(0, i);

  //       // Juntei os dois arrays na posicao que eu queria, rotacionados e transformei de novo em string para comparaçao.
  //       let caracteresRotacionados = elementosDoArrayAposOcaractere
  //         .concat(elementosDoArrayAntesDoCaractere)
  //         .join("");

  //       // transformei o array2 em string usando join para comparar, eu poderia ter usado o normalizarCapsString2 porque já era uma string.
  //       if (caracteresRotacionados === arrayString2.join("")) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
}

console.log(rotacaoDeStrings("abcde", "cdeab"));
