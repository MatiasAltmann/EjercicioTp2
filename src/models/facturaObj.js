//Forma de crear objeto de javaScript
//puedo declarar objeto sin el "new".
const factura = {
    codigo: 0,
    cliente: '',
    descripcion: '',
    items: ''
}

const remito = {
    codigo: 0,
    cliente: '',
    descripcion: '',
    items: ''
}


console.log(factura);

export {factura,remito}//hace q el objeto sea público.