class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome, 
        this.idade = idade,
        this.tipo = tipo
    }

    atacar(){

        var ataque;

        if (this.tipo == 'mago') {

            ataque = 'usou magia'
            
        } else if (this.tipo == 'guerreiro') {
            ataque = 'usou espada'
        }
        else if (this.tipo == 'monge'){
            ataque = 'usou artes marciais'
        }
        else if (this.tipo == 'ninja'){
            ataque = 'usou shuriken'
        }

        return `o ${this.tipo} atacou usando ${ataque}` 
    }

}

var personagem = new heroi('lucas', 22, 'guerreiro')

console.log(personagem.atacar());