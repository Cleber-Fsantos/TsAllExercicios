// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
let numero1:number = 0
let numero2:number = 1
let fibo:number;

for (let indice:number = 1; indice <= 10; indice++){
    console.log(`${numero1}`)
    fibo=numero1+numero2
    numero2 = numero1
    numero1 = fibo
}