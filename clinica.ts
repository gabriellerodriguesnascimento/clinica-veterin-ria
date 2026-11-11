import { Animal } from "./animais";
import { Funcionario } from "./funcionarios";
import { Consulta } from "./consulta";

export class Clinica {
    private animais: Animal[] = [];
    private funcionarios: Funcionario[] = [];
    private consultas: Consulta[] = [];

    constructor(public nome: string) {}

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
        console.log(animal.nome + " foi cadastrado(a) na clínica.");
    }

    contratarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log(funcionario.nome + " foi cadastrado(a) como funcionário(a).");
    }

    registrarConsulta(consulta: Consulta): void {
        this.consultas.push(consulta);
        consulta.veterinario.realizarConsulta();
        console.log("Consulta registrada com sucesso.");
    }

    listarAnimais(): void {
        console.log("\n ANIMAIS CADASTRADOS ");
        this.animais.forEach((animal) => {
            console.log("Nome: " + animal.nome + " | Idade: " + animal.idade + " | Tutor: " + animal.tutor);
            animal.emitirSom();
            animal.descreverCuidados();
        });
    }

    listarFuncionarios(): void {
        console.log("\n FUNCIONÁRIOS");
        this.funcionarios.forEach((funcionario) => {
            console.log("Nome: " + funcionario.nome);
            console.log("Matrícula: " + funcionario.matricula);
            console.log("Salário: R$ " + funcionario.getSalario().toFixed(2));
            console.log("Bônus: R$ " + funcionario.calcularBonus().toFixed(2));
        });
    }

    listarConsultas(): void {
        console.log("\n CONSULTAS");
        this.consultas.forEach((consulta) => consulta.exibirConsulta());
    }
}
