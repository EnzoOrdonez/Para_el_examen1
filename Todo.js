var listaTODOPrueba = [
    { codigo: 1, nombre: "Planchar", estado: false },
    { codigo: 2, nombre: "Lavar", estado: true },
    { codigo: 3, nombre: "Barrer", estado: false },
];
var listaTODOs = [];
function agregarTODO(lista, codigo, nombre, estado) {
    if (estado === void 0) { estado = false; }
    lista.push({ codigo: codigo, nombre: nombre, estado: estado });
    console.log(lista);
}
function marcarTODO(lista, num) {
    lista[num - 1].estado = true;
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
function reporteTODOs(lista) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].estado == false) {
            console.log("(", lista[i].codigo, ") ", lista[i].nombre, " [ ] ");
        }
        else {
            console.log("(", lista[i].codigo, ") ", lista[i].nombre, " [X[ ");
        }
    }
}
agregarTODO(listaTODOs, 4, "trapear");
agregarTODO(listaTODOPrueba, 4, "trapear");
marcarTODO(listaTODOPrueba, 3);
reporteTODOs(listaTODOPrueba);
