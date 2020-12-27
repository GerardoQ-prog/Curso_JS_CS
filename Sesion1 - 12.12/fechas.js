//Fechas

const diahoy = new Date()

console.log(diahoy)




const otrodia = new Date('10/12/2019')



console.log(otrodia)

//Obtener año
console.log(diahoy.getFullYear())
//Obtener mes
console.log(diahoy.getMonth() + 1)
//Obtener dia
console.log(diahoy.getDate())
//Obtener dia de la semana 0-6
console.log(diahoy.getDay())
//Obtener hora
console.log(diahoy.getHours())
//Obtener minutos
console.log(diahoy.getMinutes())
//Obtener segundos
console.log(diahoy.getSeconds())
//Obtener milisegundos
console.log(diahoy.getMilliseconds())



const dateTime = Date.now();

//Crear un timestamp ( HORA EN LA QUE SE CREA ALGO, mayormente usado en backend )
const timestamp = Math.floor(dateTime / 1000);

console.log(timestamp)
//Convertir de TIMESTAMP a FECHA
const convertir = new Date(timestamp * 1000)

console.log(convertir)











