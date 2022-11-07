// --------- TIPOS DE DADOS ---------
let notaDaSala = 20.8
let cem = 100

let nome = 'Tati'
let fraseDoInicioDoDia = "Bom dia Turma 91"
let tamanhoDeRoupa = "P"

let boolean = true
let booleanFalse = false

// --------- CONCATENAÇÕES E OPERAÇÕES MATEMÁTICAS ---------
console.log(frase + " " + cem)
console.log(cem * 30)

// = -> recebe/guarda
// == -> igual
// === -> igual tanto em valor quanto em tipo de dado

console.log(100 === "100") // comparações sempre vão retornar um boleano -> true / false

// --------- CONDICIONAIS ---------
let numberA = 100
let numberB = 5

if(numberA > numberB) {
    console.log("O número maior é " + numberA)
} else {
    console.log("O número maior é", numberB)
}

const idade = 14
if(idade >= 18) {
    console.log("Você é uma pessoa adulta")
} else if(idade > 12) {
    console.log("Você é uma pessoa adolescente")
} else {
    console.log("Você é uma pessoa criança")
}

// --------- REPETIÇÕES ---------
let idade = 0

while(idade < 10) {
    idade += 1
    console.log(idade)
}

for(let i = 0; i <= 10; i++) {
    console.log(i)
}

// let -> variaveis vai alterar os valores
//const -> constante

// --------- REPETIÇÕES COM CONDICIONAIS ---------
let number = 0

while(number < 47) {
    number++

    // se o numero é par
    if(number % 2 == 0) {
        console.log(number)
    }
}