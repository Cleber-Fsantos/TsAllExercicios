// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.
import promptSync from "prompt-sync";
let prompt = promptSync();

console.log('\nExercicio 005 - CÁLCULO DE DESCONTO\n');

let totalCompra: number = parseFloat(prompt('Digite o valor total da compra: R$ '));


if (totalCompra  <= 100 ){
    console.log(`\nValor total da Compra => R$ ${(totalCompra).toFixed(2)} - Você não tem direito a desconto =/`);
}else if(totalCompra  >= 100.01 && totalCompra  <= 200){
    console.log(`\nValor total da Compra => R$ ${(totalCompra*0.9).toFixed(2)} - Você tem direito a 10% de Desconto :)`);
}else{
    console.log(`\nValor total da Compra => R$ ${(totalCompra*0.8).toFixed(2)} - Você tem direito a 20% de Desconto :)`);
}

