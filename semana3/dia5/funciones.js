// ** funciones conjunto de suluciones para realizar una tarea

// funcion Function
function prueba() {
    console.log("Probando mi Funcion");
}

// ** Llamar a la funcion
prueba();


function sumar(numero1, numero2) {
    console.log(typeof(numero1));
    console.log(typeof(numero2));

    const suma = numero1 + numero2;

    if (isNaN(suma)) {
        return console.error("No se puede sumar"); // return indica el final de la funcion
    } 

    console.log("La suma es : ", suma);

    prueba();
}

sumar("Hola",20);

function sumar2(numero1, numero2) {

    const suma = numero1 + numero2;

    // ** Operador Ternario
    return isNaN(suma)? console.error("No se puede sumar") : 
    console.log("La suma es : ", suma);

    prueba();
}

sumar2(5,20);

// ** Funcion de expresion o funcion anonima
const resta = function(numero1, numero2) {
    const calc = +numero1 + +numero2;
    return isNaN(calc)? "Error no se puede restar" : calc;
}
console.log(resta(10,20));

const multplicacion = function(numero1, numero2){
    const mult = +numero1 * +numero2;
    return isNaN(mult)? "Error": mult;
}
console.log(multplicacion(5,5));

//arrow function => funciones flecha
// es una funcion parecida a la funcion anonima, sin ambargo no hace falta usar la palabra
// function para declarar esto ademas una funcion flecha no puede usar this, esto es la 
// diferencia entre una function y una arrow fucntion

const division = (numero1,numero2) => {
    return numero2>0? +numero1 / +numero2 : "Error" ;
}

console.log("La division es: ",division(10,10));

// `` se puede hacer con alt + 96
const saludos = (nombre,apellido) => {
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
}

console.log(saludos("Roberto","Navarro"));

// arrow sin parametros
const funcionSinParamtros = () => {
    return "Hola Mundo"
}

//arrow en una sola linea de codigo, no se necesita el return
const hello = () => "Hola Mundo in Line";