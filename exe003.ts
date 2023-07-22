// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('\nExercicio 003 - NÚMEROS CRESCENTE??? \n');


let numero1: number = parseInt(prompt('Digite o primeiro número: '));
let numero2: number = parseInt(prompt('Digite o segundo número: '));
let numero3: number  = parseInt(prompt('Digite o terceiro número: '));

if (numero1  < numero2 && numero2 < numero3){
    console.log('\nOs números estão em ordem crescente');
}else{
    console.log('\nOs números NÃO ESTÃO em ordem crescente');
}
