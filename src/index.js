////import Factura from './models/Factura.js' //importo el archivo para poder instanciarlo.
//Si quiero importar + de uno, pongp el nombre de la clase/objeto entre {}
//const miFactura = new Factura(1,"200","venta",[]) //uso el const.

import {factura}from './models/facturaObj.js'
console.log(factura);

factura.codigo = 1000;
console.log(factura.codigo);
// otra sintaxis:
console.log(factura['codigo']);


