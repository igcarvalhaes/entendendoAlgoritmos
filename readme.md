# Entendendo Algoritmos - Aditya Y. Bhargava

Este repositório contém implementações dos algoritmos apresentados no livro "Entendendo Algoritmos" de Aditya Y. Bhargava.

## Sobre o Livro

"Entendendo Algoritmos" é um guia ilustrado que explica algoritmos de forma visual e intuitiva. O livro é conhecido por:

- **Abordagem Visual**: Utiliza diagramas e ilustrações para explicar conceitos complexos
- **Linguagem Acessível**: Explica algoritmos sem jargões técnicos excessivos
- **Exemplos Práticos**: Apresenta situações do mundo real onde os algoritmos são aplicados
- **Progressão Gradual**: Constrói conhecimento do básico ao avançado

## Conteúdo Implementado

### Capítulo 1 - Pesquisa Binária

**Arquivo**: [Cap1_Pesquisa_Binaria/pesquisaBinaria.js](Cap1_Pesquisa_Binaria/pesquisaBinaria.js)

A pesquisa binária é um algoritmo eficiente para encontrar um elemento em uma lista **ordenada**.

**Características:**

- **Complexidade**: O(log n)
- **Pré-requisito**: Array deve estar ordenado
- **Estratégia**: Divide e conquista

**Como funciona:**

1. Compara o valor procurado com o elemento do meio do array
2. Se for igual, retorna a posição
3. Se o valor for menor, busca na metade esquerda
4. Se o valor for maior, busca na metade direita
5. Repete até encontrar ou esgotar as possibilidades

**Exemplo de uso:**

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(pesquisaBinaria(array, 8)); // Retorna: 7 (índice do valor 8)
```

## Estrutura do Projeto

```
Entendendo Algoritmos/
├── README.md
└── Cap1_Pesquisa_Binaria/
    └── pesquisaBinaria.js
```

## Como Executar

Para executar qualquer implementação:

```bash
node Cap1_Pesquisa_Binaria/pesquisaBinaria.js
```

## Próximos Capítulos

Este projeto será atualizado conforme o progresso do estudo, incluindo:

- Capítulo 2: Ordenação por seleção
- Capítulo 3: Recursão
- Capítulo 4: Quicksort
- E muito mais...

## Contribuições

Este é um projeto de estudo pessoal seguindo o livro "Entendendo Algoritmos". Cada implementação busca manter a clareza e simplicidade propostas pelo autor.
