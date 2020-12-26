//Condicionales



//IF-ELSE

const algo = 'asdsad' 

// Dos iguales compara el valor mas no el tipo OPERADOR NO ESTRICTO
// ==
// Tres iguales compara el valor y compara el tipo OPERADOR ESTRICTO
// ===


const numero1 = 1

const numero2 = "1"



if( numero1 !== numero2 ){
    console.log('es verdadero')
}else{
    console.log('es falso')
}


if( numero1 === numero2 ){
    console.log('es verdadero')
}else{
    console.log('es falso')
}




// == 
// === 

//Diferente
// !
//Diferente de : Cuando es solo un = solo compara el valor mas no el tipo
// !=
//Diferente de : Cuando es solo dos = solo compara el valor y tambien el tipo
// !== 




//TERNARIAS

const algo1 = false

//ESTRUCTURA
// CONDICION ? SI ES VERDADDERO : SI ES FALSO
const mensaje = 1 === "1" ? 'se pudo' : 'no se pudo'

console.log(mensaje)



//SWITCH

const diahoy = new Date('01/12/2020')

const meshoy = diahoy.getMonth() + 1 

//Recibe una condicion y revisa si coincide con alguno de los casos
switch(meshoy){
    case 1:
    console.log('ENERO')
    break;
    case 2:
    console.log('efbrero')
    break;
    case 12:
    console.log('diciembre')

    default:
    console.log('no se pudo')
    break;
}




// console.log('enero')

