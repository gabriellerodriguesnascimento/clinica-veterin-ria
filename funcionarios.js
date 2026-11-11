"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = exports.Veterinario = exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, matricula, salarioInicial) {
        this.nome = nome;
        this.matricula = matricula;
        if (salarioInicial <= 0) {
            throw new Error("O salário deve ser maior que zero.");
        }
        this.salario = salarioInicial;
    }
    getSalario() {
        return this.salario;
    }
    alterarSalario(novoSalario) {
        if (!Number.isFinite(novoSalario) || novoSalario <= 0) {
            console.log("Salário inválido. Informe um valor maior que zero.");
            return;
        }
        this.salario = novoSalario;
        console.log("Salário de " + this.nome + " atualizado com sucesso.");
    }
}
exports.Funcionario = Funcionario;
class Veterinario extends Funcionario {
    constructor() {
        super(...arguments);
        this.consultasRealizadas = 0;
        this.bonusPorConsulta = 50;
    }
    realizarConsulta() {
        this.consultasRealizadas++;
        console.log("Consulta realizada pelo veterinário " + this.nome + ".");
    }
    prescreverTratamento() {
        console.log(this.nome + " prescreveu um tratamento.");
    }
    calcularBonus() {
        return this.consultasRealizadas * this.bonusPorConsulta;
    }
}
exports.Veterinario = Veterinario;
class Recepcionista extends Funcionario {
    constructor() {
        super(...arguments);
        this.agendamentosConfirmados = 0;
        this.bonusPorAgendamento = 10;
    }
    agendarAtendimento() {
        console.log("Atendimento agendado por " + this.nome + ".");
    }
    confirmarAgendamento() {
        this.agendamentosConfirmados++;
        console.log("Agendamento confirmado por " + this.nome + ".");
    }
    calcularBonus() {
        return this.agendamentosConfirmados * this.bonusPorAgendamento;
    }
}
exports.Recepcionista = Recepcionista;
