// 9. Faça um programa que receba um número do usuário e mostre
//    no console a contagem regressiva até 0.
import promptSync from "prompt-sync";
let prompt = promptSync();

let NumeroUser:number = parseInt(prompt('Digite um Número e veja a contagem regressiva até 0: '));

while (NumeroUser >= 0){
    console.log(`${NumeroUser}`)
    NumeroUser--
}


