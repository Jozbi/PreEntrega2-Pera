//Creacion de 2 clases de objetos.

//CLASE PRODUCTO
class Producto {
    static contadorProductos = 0;
    
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    toString() {
        return `Codigo-Producto: ${this.idProducto}; Nombre: ${this._nombre}; Precio: $${this._precio}\n `
    }
}
//CLASE CARRITO
class Carrito {
    static contadorCarrito = 0;

    constructor(){
        this._idCarrito = ++Carrito.contadorCarrito;
        this._productos = [];
    }

    get idCarrito() {
        return this._idCarrito;
    }

    agregarProductos(producto) {
        this._productos.push(producto);
    }

    calcularTotal() {
        let totalPresupuesto = 0;
        for(let producto of this._productos){
            totalPresupuesto += Number(producto._precio);
        }
        return totalPresupuesto;
    }

    mostrarCarrito() {
        let carrito = '';
        if (this._productos.length === 0){
            alert('Su carrito total es de 0. Hasta la proxima.');
            document.write(`<h2>Su carrito total es de 0. Hasta la proxima.</h2>`)
        } else {
            for (let i = 0; i < this._productos.length; i++){
                carrito += this._productos[i].toString();
            }
            alert(`Orden: ${this._idCarrito}. Total: $${this.calcularTotal()}. Productos: \n${carrito}.`)
            document.write(`<h2>Orden: ${this._idCarrito}. Total: $${this.calcularTotal()}.</h2><h3>Productos:</h3> <h4>${carrito}</h4>.`)
        }
    }
}
//Item a modificar
let itemModificado;

//Carrito
let carritoActual = new Carrito;
let itemAgregar = [];

//Lista de Productos Pre-Definida
let stockProductos = [
    new Producto('Silla', 1000),
    new Producto('Mesa', 1500),
    new Producto('Ropero', 2000),
    new Producto('Cama', 2500)
];

/**Primer Decision
 * Armar carrito O Modificar lista existente
 */
let primerDecision = comprobarIngreso('Si desea armar un carrito ingrese "COMPRAR". Si desea modificar la lista de productos ingrese "MODIFICAR".', 'comprar', 'modificar');

/**CAMINO SI ELIJE ARMAR UN CARRITO DE COMPRAS
 * Desea ver la lista completa o buscar un producto
 */
if (primerDecision === 'comprar'){
    let items = comprobarIngreso('Desea ver la lista completa de items?(SI o NO)', 'si', 'no');
    if (items === 'si'){
        alert(listaEnString(stockProductos));
        deseaComprar();
    }
    else {
        deseaComprar();
    } 
}

newFunction();
function newFunction() {
    carritoActual.mostrarCarrito();
}

