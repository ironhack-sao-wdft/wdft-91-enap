// ----------- TIPOS DE ESCOPO ----------
// o escopo acontece de fora para dentro e nunca de dentro para fora
let numero = 2 // escopo global

function teste() {
    console.log("Console dentro da função:", numero)
}

teste()
console.log("Console fora da função:", numero)

// ----------- 

function teste() {
    let numero = 2 // escopo local/da função
    console.log("Console dentro da função:", numero)
}

teste()
console.log("Console fora da função:", numero)

// ----------- 

function teste() {
    let numero = 2 // escopo função, porém também um escopo global
    
    {
        let dobro = 4 // escopo de bloco, ou seja, está concentrado dentro de chaves
        console.log("Console de dentro das chaves", numero)
        console.log("Console de dentro das chaves", dobro)
    }
    console.log("Console de dentro das função", numero)
    console.log("Console de dentro das função", dobro)
}

teste()
console.log("Console global:", numero)

// ----------- HOISTING ----------- 
// fala sobre quando variáveis são declaradas e inicializadas
let nome; // declarando a variavel
console.log(nome) // undefined é o esperado

// -----------

nome = "Ana" // inicializando a variavel
console.log(nome)

// ----------- SHADOWING -----------
// possibilidade da gente declarar uma variavel de mesmo nome dentro de um escopo
let a = 6
let b = 9

function teste() {
    a = 10
    let b = 20
    console.log(b)
}

teste()
console.log(a)
console.log(b)

// ----------- IMUTABILIDADE -----------
// string, number, boolean são dados primitivos
let numero1 = 10
let numero2 = 10
console.log(numero1 === numero2)

let nome1 = "Ana"
let nome2 = nome1
console.log(nome1 === nome2)

// -----------

let numero1 = 10
let numero2 = numero1
console.log(numero1)
console.log(numero2)

numero1 = 4
console.log(numero1)
console.log(numero2)

numero2 = 200
console.log(numero1)
console.log(numero2)

// array e objetos são dados não-primitivos e são passados por referência
const livro1 = {
    autor: "Machado de Assis"
}
const livro2 = livro1

livro2.autor = "Jane Austen"
console.log(livro1)
console.log(livro2)

// -----------

const listaDeAutores1 = ["Machado de Assis", "Jane Austen", "Pedro Bandeira"]

// spread operator = ...
const listaDeAutores2 = [...listaDeAutores1]
console.log(listaDeAutores2)
listaDeAutores2.push("José de Alencar")
listaDeAutores1.push("sldkasjdlksjd")

console.log(listaDeAutores1)
console.log(listaDeAutores2)

// ----------- ASYNC -----------
// tira a necessidade do código ser executado naquele momento ou "ao vivo"

// setTimeout() => setar a lógica e quando o tempo acabar ele vai executar (milissegundos)
setTimeout(() => {console.log("TEMPO ACABOU")}, 1000)

// quando quisermos resetar o setTimeout()
clearTimeout()

// setInterval() => seta um intervalo para o código ser executado
setInterval(callback, tempo)

let i = 0;

const intervalo = setInterval(() => {
    console.log(i)
    i++

    if(i > 10) {
        // resetar o intervalo de execução
        clearInterval(intervalo)
    }
}, 1000)
