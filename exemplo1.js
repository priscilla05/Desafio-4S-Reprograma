/*For/Break/Continue	Utilize a estrutura de 
repetição for para imprimir no console conforme instruções:
a. números de 1 a 50  
b. quando chegar no número 25 interrompa a instrução e pare o loop 
c. quando chegar no número 10 pule a instrução|*/

//Letra a
console.log("inicio A")
for(let i = 1; i <= 50 ; i++){
    
  console.log(i)
}
console.log("fim A")
//letra b
console.log("inicio B")
for(let contador = 1; contador <= 50 ; contador++){
    if(contador === 25){
        break
       
    }
    console.log(contador)
}
console.log("Fim B")

//letra c
console.log("inicio C")
for(let i = 1; i <= 50 ; i++){
    if(i === 10){
        continue
    }
    console.log(i)
}
console.log("fim C")
