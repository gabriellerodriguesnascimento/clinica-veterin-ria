"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
        if (!animal || !veterinario) {
            throw new Error("Uma consulta precisa de um animal e de um veterinário.");
        }
    }
    exibirConsulta() {
        console.log("Animal: " + this.animal.nome);
        console.log("Veterinário: " + this.veterinario.nome);
        console.log("Data: " + this.data.toLocaleDateString("pt-BR"));
    }
}
exports.Consulta = Consulta;
