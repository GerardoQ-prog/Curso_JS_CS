//For loops

const arreglo = [ 'React', 'Vue', 'Angular', 'Svelte', 'HTML']

const objeto = 
{
    nombre: 'React',
    libreria_de : 'Javascript',
    profesor: 'GerardoQ'
}

console.log('intento',objeto.nombre)

//for

for(let i = 0; i < arreglo.length; i++){

    if( arreglo[i] === 'Angular'){
        continue
    }

    console.log(arreglo[i])
}

//forEach

// arreglo.forEach((tecnologia,index) => {
//     console.log(`Esta es la ${tecnologia} en el espacio ${index}`)
// })



//for of

for( const tec of arreglo){
    console.log(tec)
}





//for in

for(const tecn in objeto){
    console.log(objeto[tecn])
}

