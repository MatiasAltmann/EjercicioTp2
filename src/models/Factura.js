export default class Factura {
    constructor(codigo,cliente,descripcion,items){
        this.codigo = codigo;
        this.cliente = cliente;
        this.descripcion = descripcion;
        this.items = items;
    }
    //No es necesario declarar los atributos antes en java Script.

    calcularTotal() {
        let suma = 0;
        for (let index = 0; index < this.items.length; index++) {
            suma += this.items[index]  ;
        }
        return suma;
    }
}

//export default Factura //Esto hace que la clase sea pública.
//Los atributos se usan PUBLICOS.

//Funciones; -> La sintaxis va solo el nombre del método

