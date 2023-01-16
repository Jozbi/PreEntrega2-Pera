//Funcion para comprobar si el usuario ingresa el dato solicitado.
function comprobarIngreso(frase, a, b){
    while(true) {
        let ingresoDelUsuario = prompt(
            frase
        ).toLowerCase();
    
        if (ingresoDelUsuario === a){
            return ingresoDelUsuario;
        } else if (ingresoDelUsuario === b) {
            return ingresoDelUsuario;
        } else {
            alert('Ingrese una opcion valida')
        }
    };
};

//Funcion para convertir lista de objetos en string
function listaEnString(lista){
    let listaFinal = [];
    for (let i = 0; i < lista.length; i++){
        listaFinal.push(lista[i].toString());
    }
    return listaFinal;
}

// Funcion para poner en mayuscula la primer letra
function convertirString(palabra){
    let palabraFinal = palabra.toLowerCase();
    palabraFinal = palabraFinal[0].toUpperCase() + palabraFinal.slice(1);
    return palabraFinal;
}

//Funcion para comprobar existencia item en la lista
function existeProducto(ingreso) {
    for (let i=0; i < stockProductos.length; i++){
        if (stockProductos[i]._nombre === ingreso){
            return stockProductos[i];
        }
    }
}

//Funcion para buscar un producto en la lista
function buscarProducto() {
    let buscandoProducto;
    let resultadoBusqueda;
    buscandoProducto = prompt('Ingrese el nombre del producto que desea buscar.');
    buscandoProducto = convertirString(buscandoProducto);
    resultadoBusqueda = existeProducto(buscandoProducto);
    if(resultadoBusqueda === undefined){
        alert('No existe')
        buscarProducto();
    } else {
        alert(resultadoBusqueda.toString());
        console.log(resultadoBusqueda);
        itemAgregar.push(resultadoBusqueda);
    }
}

//Funcion para agregar al carrito

function deseaComprar(){
    let decisionUsuario = comprobarIngreso('Desea agregar un producto al carrito? (SI o NO)', 'si', 'no');
    if (decisionUsuario === 'si'){
        buscarProducto();
        carritoActual.agregarProductos(itemAgregar[itemAgregar.length - 1]);
        deseaComprar();
    } else if (decisionUsuario === 'no'){
        alert('Muchas gracias por confiar en nosotros.')
    }
}

//Funcion para agregar al carrito 
