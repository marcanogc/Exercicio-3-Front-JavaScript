// Array global para armazenar as pessoas
let pessoas = [];

//*
// Função construtora para criar objetos Pessoa
function Pessoa(name, age, cor) {
    this.name = name;
    this.age = age;
    this.cor = cor;
}

// Método para mostrar a saudação
Pessoa.prototype.sayHi = function() {
    console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos e minha cor favorita é ${this.cor}`);
    /*
    resultado.innerHTML += `<p>Olá, meu nome é ${this.name}, tenho ${this.age} anos e minha cor favorita é ${this.cor}.</p>`;
    */
}
//*/
/*
// Depois (class moderna)
class Pessoa {
    constructor(name, age, cor) {
      this.name = name;
      this.age = age;
      this.cor = cor;
    }
// Método para mostrar a saudação (atualizado)
    sayHi() {
      console.log(`Olá, meu nome é ${this.name}`);
      resultado.innerHTML += `<p>Olá, meu nome é ${this.name}, tenho ${this.age} anos e minha cor favorita é ${this.cor}.</p>`;
    }
  }
*/

// Função para comparar cores e perguntar se deseja inserir outra pessoa
function comparaCores() {
    let continuar = true;
    while (continuar) {
        let nome = prompt("Digite seu nome:");
        let idade = Number(prompt("Digite sua idade:"));
        let cor = prompt("Digite sua cor favorita:");

        let pessoa = new Pessoa(nome, idade, cor);
        pessoa.sayHi();

        // Verifica se já existe alguém com a mesma cor favorita
        for (let anterior of pessoas) {
            if (anterior.cor.toLowerCase() === cor.toLowerCase()) {
                console.log(`Você tem o mesmo gosto de cor (${cor}) que ${anterior.name}!`);
                /*
                resultado.innerHTML += `<p><strong>Você tem o mesmo gosto de cor (${cor}) que ${anterior.name}!</strong></p>`;
                */
            }
        }

        pessoas.push(pessoa);

        let resposta = prompt("Deseja inserir outra pessoa? (s/n)");
        if (resposta.toLowerCase() !== "s") {
            continuar = false;
        }
    }
}

// Função para encontrar a pessoa mais velha
function pessoaMaisVelha(pessoas) {
    if (pessoas.length === 0) {
        console.log("Nenhuma pessoa registrada.");
        return;
    }
    let maisVelha = pessoas[0];
    for (let pessoa of pessoas) {
        if (pessoa.age > maisVelha.age) {
            maisVelha = pessoa;
        }
    }
    console.log(`A pessoa mais velha é ${maisVelha.name} com ${maisVelha.age} anos.`);
    /*
    resultado.innerHTML += `<p><strong>A pessoa mais velha é ${maisVelha.name} com ${maisVelha.age} anos.</strong></p>`;
    */
}
/*
//Manipulação do DOM com querySelector
let resultado = document.querySelector('#resultado');
*/

// Execução das funções
comparaCores();
pessoaMaisVelha(pessoas);