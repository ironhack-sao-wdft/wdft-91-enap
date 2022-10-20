// ------- ARRAYS -------
// arrays são listas
const lista = ["Ana", 32, true, "P", false];

const feira = ["laranja", "maçã", "batata"];
// posições ->     0    -   1   -    2
console.log(feira[1]);
console.log(feira[0]);

// como modificar um item de um array
feira[0] = "banana";
console.log(feira);

// ------- MÉTODOS DE ARRAY BÁSICOS -------
// push() -> adiciona um item
feira.push("abacaxi");
console.log(feira);

// pop() -> remove o ultimo item
feira.pop();
console.log(feira);

// shift() -> remove o primeiro item
feira.shift();
console.log(feira);

// unshift() -> adicionar um primeiro item
feira.unshift("laranja");
console.log(feira);

// splice() -> posição do primeiro item remover, quantos itens pra remover
feira.splice(2, 2);
console.log(feira);

// -------

const nomes = ["Ana", "Maria", "João"];

console.log(nomes.length);
// i < 3

for (let i = 0; i < nomes.length; i++) {
  console.log("O nome é", nomes[i]);
}

// -------

const megaSena = [23, 4, 12, 65, 9, 10];

let soma = 0;

for (let i = 0; i < megaSena.length; i++) {
  soma = soma + megaSena[i];
  // OU soma += megaSena[i]
}

console.log(soma);

// ------- OBJETOS -------
const pessoa = {
  nome: "Ana",
  idade: 30,
  estaMatriculado: true,
  conteudo: [
    {
      disciplina: "matematica",
    },
    true,
    false,
  ],
};

// acessando informações do objeto
console.log(pessoa.estaMatriculado)
console.log(pessoa.conteudo[0].disciplina)

// array[posicao] -> item
// obj[key] -> item/informação

// (informação in objeto)
for (key in pessoa) {
  console.log(`${pessoa[key]}.`)
}

// métodos usados com objetos -> retornam arrays
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

// ------- DECLARAÇÃO DE FUNÇÕES -------
// parametros não são obrigatórios
function eUmaFuncao(params) {
  // código da nossa lógica

  // imprimir -> console.log()
  // retornar -> return
  return;
}

//chamamento da função
    // sempre ter os parenteses para chamar a nossa função
eUmaFuncao();
