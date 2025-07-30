const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pesquisaBinaria(array, valor) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (valor === array[meio]) {
      return meio;
    }
    if (valor < array[meio]) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }
  return -1;
}

console.log(pesquisaBinaria(array, 8));
