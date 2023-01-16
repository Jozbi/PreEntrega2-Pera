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

//Funcion para agregar item en la lista

