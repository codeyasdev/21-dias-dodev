//let e const

let nome = ""
let idade = 0
let altura = 0
let peso = 0

//solicitando informacao ao usuario e atribuindo os valores as variaveis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

//calculando o ano que a pessoa nasceu e o IMC
let yearNasc = 0
yearNasc = 2025 - idade

let imc = 0
imc = peso / (altura*altura)

//Exibindo as informacoes no console
console.log ("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + yearNasc + ", tem " + altura + " de altura, pesa " + peso + "KG e seu IMC é " + imc + "KG/m²")