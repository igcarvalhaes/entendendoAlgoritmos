/*
Implemente um algoritmo que encontre o caractere que mais aparece em uma string. Se houver empate, retorne qualquer um dos mais frequentes.
*/

function caractereMaisFrequente(s) {
  let stringNormalizada = s.toLowerCase();
  let mapaDeCaracters = {};

  for (let char of stringNormalizada) {
    mapaDeCaracters[char] = (mapaDeCaracters[char] || 0) + 1;
  }

  let characterQueMaisAparece = "";
  let quantidadeDeVezesQueAparece = 0;

  for (let char in mapaDeCaracters) {
    if (mapaDeCaracters[char] > quantidadeDeVezesQueAparece) {
      quantidadeDeVezesQueAparece = mapaDeCaracters[char];
      characterQueMaisAparece = char;
    }
  }

  return `${characterQueMaisAparece} - ${quantidadeDeVezesQueAparece}x`;
}

console.log(caractereMaisFrequente("hellllo"));

{
  h: 1;
  e: 1;
  l: 4;
  o: 1;
}
