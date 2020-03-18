//Ejercicio 1 crear una función que de el resultado de una multiplicación

var valoruno = parseInt(prompt("Ingerese su primer número"));

var valordos = parseInt(prompt("Ingrese su segundo número"));

var resultado = multiplicacion(valoruno, valordos);

function multiplicacion(h, j) {
    return (h * j);
}

console.log("La multiplicacion de los dos numeros ingresados es de: " + resultado);