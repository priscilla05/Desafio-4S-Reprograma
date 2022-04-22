/*Crie uma função que irá receber um número e retornar
 o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6*/

 
/*Usando reduce
 const fatorial = [5, 4, 3, 2, 1]
 const result = fatorial.reduce ((valorAtual, valorAnterior) =>{
     return valorAnterior * valorAtual
 })
 console.log(result)// resulta em 120 */

 // usando função
 function factorial(num) {
    let resultado = num

    for (let i = 1; i < num; i++){
        resultado = resultado * i
    }
    return resultado
}
console.log(factorial(7)) // resulta em 5040