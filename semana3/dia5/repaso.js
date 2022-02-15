const personas = ["Jose", "Maria", "Juan", "Luis", "Pedro", 
                  "Julia", "Erick", "Julian","Rosa", "Mario"];

console.log("Numero de Personas : ", personas.length)

personas[6] = "Juanito";
console.log("Modifique persona 6 : ", personas);

let valores = [10, 10.5, true, "Hola", 0.5]

function obtenerValor(persona) {
    return persona[11] === undefined? "Error" : persona[11];
}

console.log("Obtener valor : ", obtenerValor(personas));

//********************************************************* */

// forma antigua de declararlo, pero muy pesado, array vacio
let carro = new Array();

// forma nueva de declarar un array, array vacio
let carroNuevos = []

//vamos a crear una funcion la cual se encargue de llenar un array carros nuevos
const fillArray = (nuevoValor) => {
    carroNuevos.push(nuevoValor);
}

fillArray("Toyota Yaris");
fillArray("Mercedes");
fillArray(["Mazda","Tesla","Subvaru"]);

console.log("Ingrese nuevo Carro : ", carroNuevos)
console.log("Ingrese nuevo Carro : ", carroNuevos[2][1])



const parImpar = (numero) =>  numero % 2 === 0? "Par" : "Impar" 
console.log("El numero es : ", parImpar(15))

