import {factura, remito}from './models/facturaObj.js'
console.log(factura);

factura.codigo = 1000;
console.log(factura.codigo);
// otra sintaxis:
console.log(factura['codigo']);

let unaVariableCualquiera = 'cliente';
console.log(factura[unaVariableCualquiera]);

factura.total = 1000;

console.log(factura)
