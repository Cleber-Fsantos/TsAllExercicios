// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.
import promptSync from "prompt-sync";
let prompt = promptSync();

let NumeroUser:number;

do
{
     NumeroUser = parseInt(prompt('Digite um Número: '));
}while (NumeroUser != 0)

console.log(`Parabéns, Você saiu do LOOOP de 0!!!!`)

