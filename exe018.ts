// Uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a 500 reais.
// Escreva um programa que receba o salário de um funcionário e 
// imprima o valor do salário reajustado ou uma mensagem caso o 
// funcionário não tenha direito a aumento.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('Exercicio 018 - ');

let salario: number  = parseFloat(prompt('Digite o salário: R$ '));


if (salario < 500){
    salario = salario * 1.3;
    console.log('Seu salário foi reajustado para: R$ ' + salario);
} else{
    // console.log('\n\nDesculpe mas você não atende o requisito para o reajuste de salário =/');
    console.log(`\n\nSeu salário é de R$ ${salario.toFixed(2)}, Desculpe mas você não atende o requisito para o reajuste de salário =/`);
}

