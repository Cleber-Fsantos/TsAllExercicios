// Faça um programa que receba um número inteiro 
// do usuário e informe se este número é positivo ou negativo.
import promptSync from "prompt-sync";
let prompt = promptSync();
console.log('Exercicio 003 - ');

let number: number  = parseInt(prompt('Digite um número qualquer: '));

if (number >= 0){
    console.log('\n\nO número é POSITIVO');
} else{
    console.log('\n\nO número é NEGATIVO');
}

