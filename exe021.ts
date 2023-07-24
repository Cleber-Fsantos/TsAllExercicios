// Faça um programa receba dois valores e 
// imprima qual é o maior número digitado.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('Exercicio 005 - ');

let number1: number  = parseInt(prompt('Digite um número qualquer: '));
let number2: number  = parseInt(prompt('Digite outro número qualquer: '));

if (number1 > number2){
    console.log('\nO número maior é primeiro: ' +number1);
} else if(number1 == number2){
    console.log(`\nOs números são iguais ${number1} = ${number2}`);
}else{
    console.log('\nO número maior é o segundo: ' +number2);
}
