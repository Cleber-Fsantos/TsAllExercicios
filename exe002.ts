// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('\nExercicio 002 - DIA DA SEMANA \n');


let diaSemana: string  = prompt('Digite um número representando o dia da semana (1/7): ');

switch(diaSemana){
    case '1': 
        console.log('\nHoje é Segunda-Feira');
        break;
    case '2':
        console.log('\nHoje é Terça-Feira');
        break;
    case '3':
        console.log('\nHoje é Quarta-Feira');
        break;
    case '4':
        console.log('\nHoje é Quinta-Feira');
        break;
    case '5':
        console.log('\nHoje é Sexta-Feira');
        break;
    case '6':
        console.log('\nHoje é Sabado');
        break;
    case '7':
        console.log('\nHoje é Domingo');
        break;

    default:
        console.log('\nValor Digitado não corresponde a um dia da semana');
        break;
    }