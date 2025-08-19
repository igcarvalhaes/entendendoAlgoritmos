# 🎯 Treino para Entrevista de Estágio - Algoritmos Básicos

## Strings e Arrays

### 1. **Palíndromo**

Implemente um algoritmo para verificar se uma string é um palíndromo (lê-se igual de frente para trás). Ignore espaços, pontuação e diferenças entre maiúsculas e minúsculas.

**Exemplos:**

- `"arara"` → `true`
- `"A man a plan a canal Panama"` → `true`
- `"hello"` → `false`

### 2. **Anagramas**

Crie uma função que determine se duas strings são anagramas uma da outra (possuem as mesmas letras em quantidades iguais, mas em ordens diferentes).

**Exemplos:**

- `"listen"` e `"silent"` → `true`
- `"amor"` e `"roma"` → `true`
- `"casa"` e `"mesa"` → `false`

### 3. **Caractere Mais Frequente**

Implemente um algoritmo que encontre o caractere que mais aparece em uma string. Se houver empate, retorne qualquer um dos mais frequentes.

**Exemplos:**

- `"hello"` → `"l"` (aparece 2 vezes)
- `"programming"` → `"r"` ou `"m"` ou `"g"` (todos aparecem 2 vezes)

### 4. **Rotação de String**

Verifique se uma string é uma rotação de outra. Por exemplo: "abcde" e "cdeab" são rotações uma da outra.

**Exemplos:**

- `"abcde"` e `"cdeab"` → `true`
- `"waterbottle"` e `"erbottlewat"` → `true`
- `"hello"` e `"world"` → `false`

### 5. **Primeira Letra Única**

Encontre o primeiro caractere que aparece apenas uma vez em uma string. Se não existir, retorne null.

**Exemplos:**

- `"abccba"` → `null` (todos se repetem)
- `"abcdef"` → `"a"` (primeiro único)
- `"hello"` → `"h"` (primeiro que aparece só uma vez)

## Arrays e Lógica

### 6. **Array Sem Duplicatas**

Implemente uma função que remova elementos duplicados de um array mantendo apenas a primeira ocorrência de cada elemento.

**Exemplos:**

- `[1, 2, 2, 3, 4, 4, 5]` → `[1, 2, 3, 4, 5]`
- `["a", "b", "a", "c"]` → `["a", "b", "c"]`

### 7. **Segundo Maior Número**

Encontre o segundo maior número em um array de inteiros. Se não existir, retorne uma mensagem apropriada.

**Exemplos:**

- `[1, 5, 3, 9, 2]` → `5`
- `[10, 10, 10]` → `"Não existe segundo maior"`
- `[7]` → `"Array muito pequeno"`

### 8. **Soma de Dois Números**

Dado um array de números e um valor alvo, determine se existem dois números no array que somados resultem no valor alvo.

**Exemplos:**

- `[2, 7, 11, 15]` e alvo `9` → `true` (2 + 7 = 9)
- `[3, 2, 4]` e alvo `6` → `true` (2 + 4 = 6)
- `[1, 2, 3]` e alvo `7` → `false`

### 9. **Array Rotacionado**

Verifique se um array é uma rotação de outro array. Exemplo: [1,2,3,4,5] e [3,4,5,1,2].

**Exemplos:**

- `[1, 2, 3, 4, 5]` e `[3, 4, 5, 1, 2]` → `true`
- `[1, 2, 3]` e `[2, 3, 1]` → `true`
- `[1, 2, 3]` e `[1, 3, 2]` → `false`

### 10. **Elementos em Comum**

Encontre todos os elementos que aparecem em dois arrays diferentes.

**Exemplos:**

- `[1, 2, 3, 4]` e `[3, 4, 5, 6]` → `[3, 4]`
- `["a", "b", "c"]` e `["b", "c", "d"]` → `["b", "c"]`

## Números e Matemática

### 11. **Número Primo**

Implemente uma função que verifique se um número é primo.

**Exemplos:**

- `7` → `true`
- `4` → `false`
- `2` → `true`
- `1` → `false`

### 12. **Fibonacci**

Crie uma função que retorne o n-ésimo número da sequência de Fibonacci.

**Exemplos:**

- `fibonacci(6)` → `8` (sequência: 0, 1, 1, 2, 3, 5, 8...)
- `fibonacci(0)` → `0`
- `fibonacci(1)` → `1`

### 13. **Fatorial**

Implemente o cálculo do fatorial de um número, tanto de forma iterativa quanto recursiva.

**Exemplos:**

- `fatorial(5)` → `120` (5 × 4 × 3 × 2 × 1)
- `fatorial(0)` → `1`
- `fatorial(3)` → `6`

### 14. **Inversão de Número**

Implemente um algoritmo que inverta os dígitos de um número inteiro. Exemplo: 123 → 321.

**Exemplos:**

- `123` → `321`
- `1000` → `1`
- `-123` → `-321`

### 15. **Maior Divisor Comum (MDC)**

Encontre o maior divisor comum entre dois números.

**Exemplos:**

- `mdc(12, 8)` → `4`
- `mdc(17, 13)` → `1`
- `mdc(24, 36)` → `12`

---

## 💡 Dicas para a Entrevista:

- **Pense em voz alta** - explique seu raciocínio
- **Considere casos extremos** - strings vazias, arrays com um elemento, etc.
- **Otimize depois** - primeiro faça funcionar, depois melhore
- **Teste mentalmente** - verifique com exemplos simples
- **Pergunte sobre restrições** - tamanho dos dados, complexidade esperada

## 🎯 Foco Principal:

- Manipulação de strings
- Iteração em arrays
- Comparações e condições
- Estruturas de repetição
- Pensamento lógico simples

Boa sorte na sua entrevista! 🚀
