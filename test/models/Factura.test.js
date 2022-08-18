import Factura from '../../src/models/Factura.js'
function testFactura(){

const factura = new Factura(1,1,1,[]);

console.log(factura);

const esperado = 0;
if(esperado == factura.calcularTotal()){
    console.log('Dado una lista de items vacio, retorna 0')
}else {
    console.log('Dado una lista de items vacio, retorna 0, error')
}

factura.items = [12,34,12];
const esperado2 = 58;

if(esperado2 == factura.calcularTotal()){
    console.log('Dado una lista de items 12,34,12, retorna 58')
}else {
    console.log('Dado una lista de items 12,34,12, error')
}
}



/*
Pruebas unitarias.
*/

export default testFactura