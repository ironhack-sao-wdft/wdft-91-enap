// -------- ORIENTAÇÃO A OBJETO --------
// a classe sempre vai representar um modelo ou representação de algo
// o objeto será a criação de algo específico
// EXEMPLO: classe cachorro e objeto cachorro totó

// superclasse ou classe pai
class Animais {
  // constructor dita o que precisa passar na criação do objeto
  constructor(porte, nome) {
    this.porte = porte;
    this.nome = nome;
  }
}

// -------- HERANÇA --------
// subclasse ou classe filha
class Cachorro extends Animais {
  constructor(porte, nome, tutor) {
    // super fala quais atributos dinâmicos do pai será passado
    super(porte, nome)
    // atributos = características
    // this = este objeto (o especifico que a gente vai criar) -> dinamicidade
    this.tutor = tutor;
    this.brinquedos = ["Bolinho", "Osso", "Ursinho"];
  }

  // método = ações/funções
  latir = () => console.log("O cachorro latiu.")
}

// new é o momento que criaremos um objeto baseado em uma classe
let novoCachorro = new Cachorro("M", "Totó", "Ana")
console.log(novoCachorro)

// -------- PROBLEMÁTICA TRAZIDO PELO IGNÁCIO E HANI --------
// caso eu tenha uma superclasse Animais e uma subclasse Hamster,
  // mas todos os hamster tenham um único porte
class Hamster extends Animais {
  constructor(nome, cor) {
    // setar o valor do dado que será fixo para todos os objetos da classe,
      // no caso aqui todos os hamster terá o porte P
    super("P", nome)
    this.cor = cor
  }
}

let novoHamster = new Hamster("Hamtaro", "Laranja")
console.log(novoHamster)