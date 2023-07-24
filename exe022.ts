// Faça um programa que receba 4 notas de um aluno,
//  calcule e imprima a média aritmética das notas 
//  e a mensagem de 
 
//  APROVADO para média superior ou igual a 7,0 
//  RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de 
//  REPROVADO para média inferior a 5,0.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('Exercicio 006 - ');

let nota1: number  = parseInt(prompt('Digite a primeira nota: '));
let nota2: number  = parseInt(prompt('Digite a segunda nota: '));
let nota3: number  = parseInt(prompt('Digite a terceira nota: '));
let nota4: number  = parseInt(prompt('Digite a quarta nota: '));


let media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 7){
    console.log('\n\nAPROVADO:\nsua média foi de: ' + media);
} else if((media < 7) && (media >= 5)){
    console.log('\n\nRECUPERAÇÃO:\nsua média foi de: ' + media);
} else{
    console.log('\n\nREPROVADO:\nsua média foi de: ' + media);
}

