# Sistema de Gestão Veterinária



## Conceitos aplicados

- **Abstração:** `Animal` e `Funcionario` são classes abstratas.
- **Herança:** `Cachorro`, `Gato` e `Ave` herdam de `Animal`; `Veterinario` e `Recepcionista` herdam de `Funcionario`.
- **Polimorfismo:** cada espécie implementa seu próprio som e seus cuidados.
- **Encapsulamento:** o salário é privado e só pode ser alterado pelo método `alterarSalario`, que valida o valor.
- **Associação:** cada `Consulta` recebe obrigatoriamente um `Animal` e um `Veterinario`.
- **Agregação:** a clínica mantém listas de animais e funcionários, que podem continuar existindo independentemente dela.

## Como executar

1. Instale o Node.js.
2. Abra a pasta no VS Code.
3. No terminal, execute:

```bash
npm install
npm run build
npm start
```

## Estrutura

```text
clinica-veterinaria/
├── src/
│   ├── animais.ts
│   ├── funcionarios.ts
│   ├── consulta.ts
│   ├── clinica.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```
 R$ 50,00 por consulta realizada pelo veterinário e R$ 10,00 por agendamento confirmado pela recepcionista.
