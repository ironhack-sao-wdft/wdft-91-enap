// ------------- FUNÇÕES -------------
// declaração de função: chamar em qualquer momento do nosso código
function funcao(params) {
  // código/lógica
}

// chamamento de função
funcao(params)


// expressão de função: chamar após criar a minha função
const funcao = function (params) {
  // código/lógica
}

// expressão de função: arrow function -> função com flecha
const funcaoArrow = (params) => {
  // código/lógica
}

// -------------

// ------------- CALLBACKS -------------
//chamar uma função dentro de outra função descobrir se um numero ele é par e solta uma mensagem se ele é par
function ePar(numero, gerarMensagem) {
  if (numero % 2 === 0) {
    gerarMensagem()
  } else {
    console.log("É ímpar")
  }
}

// callback (segundo argumento da função principal)
ePar(46, () => {
  console.log("Este número é par")
})

// ------------- MÉTODOS DE ARRAY -------------
const numeros = [32, 45, 100, 65, 73, 2, 14, 23] // array original

// .map(funcao) -> retorna um novo array de mesmo tamanho do array
const dobro = numeros.map((item) => {
  return item * 2
})

console.log(dobro)

// .filter(funcao) -> retornar um novo array de tamanho diferente (menor) a partir de um filtro
const pares = numeros.filter((item) => {
  return item % 2 === 0
})

console.log(pares)

// -------------

const palavras = ["Ana", "Maria", "Ana", "Claudia", "João"]

const anas = palavras.filter((item) => {
  return item === "Ana"
})

console.log(anas)

// -------------

// .sort() -> organizar o nosso array original -> ascendente
console.log(numeros.sort())

// .reverse() -> organiza o nosso array - > enverter do array
console.log(numeros.reverse())

// ------------- PRÁTICA COM MÉTODOS DE ARRAY -------------
// PROBLEMÁTICA: separar os itens da lista que são frutas e somar o total que gastaremos comprando apenas frutas
const listaDeCompras = [
  { nome: "Alface", categoria: "Verduras", preco: 5.70 },
  { nome: "Maçã", categoria: "Frutas", preco: 7 },
  { nome: "Banana", categoria: "Frutas", preco: 10 },
  { nome: "Cebolinha", categoria: "Verduras", preco: 2.99 },
  { nome: "Abacate", categoria: "Frutas", preco: 4.40 },
  { nome: "Berinjela", categoria: "Legumes", preco: 8.55 }
]

const frutas = listaDeCompras.filter((item) => {
  return item.categoria === "Frutas"
})

console.log(frutas)

const precoDeFrutas = frutas.map((item) => {
  return item.preco
})

console.log("Array só de preços:", precoDeFrutas)

const totalPrecoFrutas = precoDeFrutas.reduce((acumulado, valorAtual) => {
  console.log(acumulado)
  return acumulado + valorAtual
})

console.log("Total:", totalPrecoFrutas)