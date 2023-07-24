// Faça um programa que receba o nome, cargo e salário de um funcionário.
// Se o funcionário ganhar abaixo de 1000 reais; 
// calcule o salário acrescido de 10%. 
// Ao final exiba o nome, o cargo e o salário desse
//  funcionário.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('Exercicio 017 - ');



let nome: string  = prompt('Digite o nome do funcionário: ');
let cargo: string  = prompt('Digite o cargo: ');
let salario: number  = parseFloat(prompt('Digite o salário: '));


if (salario < 1000){
    salario = salario * 1.1;
}

console.log('\n\nNome: ' + nome + '\nCargo: ' + cargo + '\nSalario: R$ ' + salario.toFixed(2));