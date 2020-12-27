const objeto = {
    nombre: 'Jose',
    apellido : 'Martinez',
    direccion:{
        distrito: 'Surco',
        calle: 'Los Pinos'
    }
}

console.log(objeto.direccion.distrito)

const { direccion } = objeto

console.log(direccion)

const { distrito : ciudad } = direccion

console.log(ciudad)

