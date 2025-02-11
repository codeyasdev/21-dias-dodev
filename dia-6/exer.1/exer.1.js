// exer. 1 
// Faça um algoritimo que recebe um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.
let numero = parseInt(prompt("digite um numero inteiro e positivo: "))

// CRIANDO LOOP FOR
for(let i = 0; i <= numero; i++){
    console.log (i)}

// exer.2 
// Desenvolva um algoritimo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
for(let i = 0; i <= 50; i+=10){
    console.log (i)}




// exer. 3 ( APENAS QUER O NUMERO DE FORMA CONTRARIA)
for(let i = 50; i >= 0; i-=5){
    console.log (i)}




    
// exer.4
let numero = parseInt(prompt("digite um inteiro e positivo : "))
for(let i = numero; i <= numero + 2; i++){
    console.log ("tabuada do numero: "+ i)
    for (let j = 0; j <= 10; j++){
        console.log (i + " x " + j + " = " + (i*j))
    }
}