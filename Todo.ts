interface todo {
    codigo:number,
    nombre:string,
    estado:boolean
}

const listaTODOPrueba: todo[] = [
    { codigo: 1, nombre: "Planchar",   estado: false },
    { codigo: 2, nombre: "Lavar",  estado: true },
    { codigo: 3, nombre: "Barrer", estado:false },
  ];

const listaTODOs : todo[] = [] 

type Agregartodo = (lista: todo[], codigo:number,nombre:string) => todo[];

function agregarTODO(lista: todo[], codigo:number, nombre:string, estado = false) {

    lista.push({codigo,nombre,estado})

    console.log(lista)
}


function marcarTODO (lista : todo[], num:number) {

    lista[num-1].estado = true

    for(let i=0;i<lista.length;i++){
    
        console.log(lista[i])
    
    }

}

function reporteTODOs(lista:todo[]){

    for(let i=0;i<lista.length;i++){

        if(lista[i].estado == false){
            console.log("(",lista[i].codigo,") ",lista[i].nombre," [ ] ")
        }
        else{

            console.log("(",lista[i].codigo,") ",lista[i].nombre," [X[ ")
        }

    }

}

agregarTODO(listaTODOs,4,"trapear")

agregarTODO(listaTODOPrueba,4,"trapear")

marcarTODO(listaTODOPrueba,3)

reporteTODOs(listaTODOPrueba)

