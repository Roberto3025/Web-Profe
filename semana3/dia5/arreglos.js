// alert("Funciona")

//Una variable contiene 1 datos a la vez

// ** Arreglo conjunto de datos, la forma enq se declara es parecida a la de una variable sin 
// ** embargo debemos colocar los corchetes despues del =

// !! arreglo vacio, para poder llenarlo debo colocar los datos separados por comas
// !! :eye: siempre empieza a contar desde 0
const hermanos = ["Yanira","Jose","Liced","Rosa"];
console.log(hermanos);

// !! peromite ingresar cualquier tipo de dato
const tipos = [100, "Jose", 10.5, true];
console.log(tipos);

// ** Alterar un valor en el array
tipos[1] = "Yanira";

// ** Agregar un nuevo elemento al array
tipos[6] = "Jorge";

// ** Como puedo acceder a un dato especifico en un array, solo le paso el indice
console.log("Cambia el valor del segundo elemento :",tipos[1]);
console.log(tipos);

console.log("Elementos del array: ", tipos.length);

//Recorrer un array
for (let index = 0; index < tipos.length; index++) {
    console.log("Lista los elementos ", index, " : ", tipos[index])
};

const nombre = prompt("Ingrese un nombre");

let conta = 0;
let conte = 0;
let conti = 0;
let conto = 0;
let contu = 0;

for (let index = 0; index < nombre.length; index++) {
    if ( nombre.substring(index,index+1) === "a") {
        conta += 1;
    } else if (nombre.substring(index,index+1) === "e") {
        conte += 1;
    } else if (nombre.substring(index,index+1) === "i") {
        conti += 1;
    } else if (nombre.substring(index,index+1) === "o") {
        conto += 1;
    } else if (nombre.substring(index,index+1) === "u") {
        contu += 1;
    }
}

console.log("Vocal a : ", conta);
console.log("Vocal e : ", conte);
console.log("Vocal i : ", conti);
console.log("Vocal o : ", conto);
console.log("Vocal u : ", contu);


