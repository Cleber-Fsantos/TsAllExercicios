// Faça um programa que receba um número do usuário 
// e informe se este número é par ou ímpar.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('\nExercicio 004 - \n');

let number: number  = parseInt(prompt('Digite um número qualquer: '));

if ((number % 2) == 0 ){
    console.log('\nO número é PAR');
} else{
    console.log('\nO número é IMPAR');
}

