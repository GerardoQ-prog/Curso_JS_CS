//Tipos de Datos


//Numeros

const numero1 = 1
console.log(numero1)
//Typeof : ayuda a saber que tipo de dato es
console.log( typeof numero1)

const numero2 = 1.12323
console.log(numero2)

console.log(numero2.toFixed(2))
console.log( typeof numero2.toFixed(2))

//Number te ayuda a convertir a numero
console.log(Number(numero2.toFixed(2)))

//parseint te ayuda a convertir a numero(Sin decimales)
console.log(parseInt(numero2.toFixed(2)))

//parsefloat te ayuda a convertir a numero(Con decimales)
console.log(parseFloat(numero2.toFixed(5)))

// *1 tambien te ayuda a convetirlo a numero , no muy recomendado
//toFixed() acorta la palabra  
console.log(numero2.toFixed(2)*1)

console.log(typeof numero2.toFixed(2)*1)


//Cadenas

const cadena = "hola como estas"

console.log(cadena)

console.log(cadena.length)

// console.log(cadena.trim())

//Replace: reemplaza una letra de una cadena
console.log(cadena.replace('a','p'))

//ReplaceAll : reemplaza todas las letras que coincidan en una cadena
console.log(cadena.replaceAll('a','p'))


//Arreglos
const array = [1 , 2 ,3 ,4 ,5 ,6]


//Objetos
const objeto = {
    numero10 : 10,
    numero2 : 2 ,
    array: [1 , 2, 4 ,5],
    objeto1:{
        numero30:3
    }

}


console.log( objeto.objeto1.numero30)

//Desestructuracion
const { numero10, objeto1 } = objeto

const { numero30 } = objeto1

console.log('desestructuracion',numero30)


console.log( numero10 )



// console.log(array.length)


// console.log(objeto)

// const expReg = /[<>#@$%^&]/;


// expReg.exec(value.title)


//Booleanos

// true false

const algo1 = () => {

}


const algo = async () => {
    await aalgo1()
    console.log('sadsad')
}


//Undefined


//Null

