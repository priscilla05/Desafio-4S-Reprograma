/*Faça um programa que dado um número, 
imprime no (console.log) a tabuada do mesmo de 1 a 10.*/

function tabuada(num) {
    let stringTabuada = ""
    for (i = 1; i <= 10; i++){
        let resultado = num * i
        stringTabuada = `${stringTabuada} ${num} x ${i} = ${resultado}\n`
    }
    return stringTabuada
}
console.log(tabuada(12))