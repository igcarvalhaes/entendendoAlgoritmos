// Crie uma função que determine se duas strings são anagramas uma da outra (possuem as mesmas letras em quantidades iguais, mas em ordens diferentes).

// **Exemplos:**

// - `"listen"` e `"silent"` → `true`
// - `"amor"` e `"roma"` → `true`
// - `"casa"` e `"mesa"` → `false`

function anagrama(sOne, sTwo) {
  let stringOneMinuscula = sOne.toLowerCase();
  let stringTwoMinuscula = sTwo.toLowerCase();

  let sortStringOneMinuscula = stringOneMinuscula.split("").sort().join("");
  let sortStringTwoMinuscula = stringTwoMinuscula.split("").sort().join("");

  if (sortStringOneMinuscula === sortStringTwoMinuscula) {
    return `São anagramas`;
  } else {
    return `Não são anagramas`;
  }
}

console.log(anagrama("amor", "roma"));
