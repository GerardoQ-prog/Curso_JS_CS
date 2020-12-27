//Expresiones Regulares


const onlyNumbers = /[a-z]/g

const onlyLetters = /[0-9]/i

const palabra = /(palabra)/

const palabras = /(buscando|hola)/


//test

const dni = '74132910'
const resultado = onlyNumbers.test(dni)
console.log(resultado)


//replace

const oracion = " Buenas noches "
const resultado1 = oracion.replace("B","z")
console.log(resultado1)


//replaceAll

const oracion1 = "Buenas noches"
const resultado2 = oracion1.replaceAll(" ","-")
console.log(resultado2)



//split
const oracion2 = "Buenaas trdes"
const resultado3 = oracion2.split("a")
console.log(resultado3)

