"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = exports.Gato = exports.Cachorro = exports.Animal = void 0;
class Animal {
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
}
exports.Animal = Animal;
class Cachorro extends Animal {
    emitirSom() {
        console.log(this.nome + " faz: Au au!");
    }
    descreverCuidados() {
        console.log(this.nome + " precisa de passeio diário.");
    }
    latir() {
        this.emitirSom();
    }
    passear() {
        console.log("Passeando com " + this.nome + ".");
    }
}
exports.Cachorro = Cachorro;
class Gato extends Animal {
    emitirSom() {
        console.log(this.nome + " faz: Miau!");
    }
    descreverCuidados() {
        console.log(this.nome + " precisa de um arranhador.");
    }
    miar() {
        this.emitirSom();
    }
    usarArranhador() {
        console.log(this.nome + " utiliza o arranhador.");
    }
}
exports.Gato = Gato;
class Ave extends Animal {
    emitirSom() {
        console.log(this.nome + " está cantando!");
    }
    descreverCuidados() {
        console.log(this.nome + " precisa de uma gaiola adequada, limpa e segura.");
    }
    cantar() {
        this.emitirSom();
    }
    verificarGaiola() {
        console.log("Verificando a gaiola de " + this.nome + ".");
    }
}
exports.Ave = Ave;
