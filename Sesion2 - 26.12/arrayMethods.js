//Array Methods
const arreglo = [ 'React', 'Vue', 'Angular', 'Svelte']

// console.log(arreglo.splice('React','hola'))

const arreglo2 = [ 'CSS', 'HTML', 'JS']

const carrito = [
    {   
        id:1,
        nombre:'Iron Man lego',
        precio: 15
    },
    {   
        id:4,
        nombre:'Spider Man lego',
        precio: 5
    },
    {   
        id:3,
        nombre:'Cap America lego',
        precio: 45
    }
]


//MAP ( recorre todo el array )

const recorrido = arreglo.map((item,index) => {
    console.log(item)
})

const recorridocarrito = carrito.map((item,index) => {
    console.log(item.id)
})





//FILTER ( devuelve un nuevo array luego de una condicion)

const nuevoarray = carrito.filter((item,index) => item.id !== 1)

console.log(nuevoarray)





//FIND ( obtiene el primer elemento que coincida con la condicion)

const obtener = carrito.find((item,index) => item.nombre === 'Iron Man lego')
console.log(obtener)

const obtener1 = arreglo.find((item,index) => item === 'React')
console.log(obtener1)



//SOME ( true o false depende a la condicion)

const existe = carrito.some((item,index) => item.precio > 10)
console.log(existe)




//REDUCE (Agrupa valores de un array)
const total = carrito.reduce((total,producto)=> total + producto.precio , 0)
console.log(total)



//EVERY ( parecido al some , solo que este si evalua todos)
const resultado = carrito.every(item => item.precio > 10)
console.log(resultado)






