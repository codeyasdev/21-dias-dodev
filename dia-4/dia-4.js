// exercicio aula 4 - criando minha primeira condicional sozinha.(jantar especial)
const fome = prompt("Você está com fome? (sim/não)")
const dinheiro = prompt("Você tem dinheiro? (sim/não")
const restaurante = prompt("Está aberto ? (sim/não)")

if (fome === "não" || dinheiro == "não"){
    console.log ("Hoje a janta será em casa")
} else if (dinheiro == "sim" && restaurante == "sim"){
    console.log("hoje o jantar será no seu restaurante preferido");}
else{
        console.log("peça um delivery");
    }

    // motorista
    let nome = prompt("Qual seu nome? ")
    let idade = prompt("quantos anos você tem?")
    let carteira = prompt("Você tem carteira de motorista? (sim/não)")
    let carro = prompt("voc~e tem carro? (sim/não)")


    if (idade < 18 || carteira == "não"){
        console.log(nome + ", Você não pode dirigir")
            } else if (idade >= 18 && carro === "não" ){
                console.log(nome+", você pode dirigir mas não tem um carro");} 
                if(idade >= 18 && carteira === "sim" && carro === "sim") {
                console.log(nome+", Você será o motorista");
            }