// criando o modelo de classe
class Calculator {
    sum = (num1, num2) => {
        return Number(num1) + Number(num2)
    }

    sub = (num1, num2) => {
        return num1 - num2
    }
}

// criando o meu objeto
const calculadora = new Calculator()

// identificar todos os elementos html que vão ser manipulados
const numberOne = document.getElementById("numberOne")
const numberTwo = document.querySelector("#numberTwo")
const result = document.getElementById("result")
const resultBtn = document.querySelector("#resultBtn")

console.log(numberOne) //retorna o elemento html

// eventos = desencadear um acontecimento
// addEventListener(o que precisa "ouvir", callback)
    // -> adicionar um evento a partir daquilo que ele "ouvir"
resultBtn.addEventListener("click", () => {
    let inputOne = numberOne.value
    console.log(inputOne)
    let inputTwo = numberTwo.value
    console.log(inputTwo)

    let resultCalc = calculadora.sum(inputOne, inputTwo)
    console.log(resultCalc)

    result.innerText = resultCalc
})