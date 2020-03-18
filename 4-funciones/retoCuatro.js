//Ejercicio 4 Calculador de modelo de caja
//Hacer un calulador al que le ingrsaremos 4 parámetros y nos devolverá el ancho del contenido border-box, caja entera para content-box
//boolean para especificar si es border-box content-box
//ancho de la caja entera
var tipoBox = 0; //tipo de caja borderbox false
var tipoContent = 1; // tipo de caja content-bos true
const padding = 10;
const ancho = 300;
const border = 2;
var tipocaja = parseInt(prompt("Especifique que quiere calcular:   Para calcular BorderBox escripa 0  y Para calcular ContentBox 1 "));

var calculo = box(tipocaja, padding, ancho, border);

function box(tc, p, a, b) {
    if (tc === 0) {
        console.log(`El ancho del Border-box es de:  ${p+a+b} pixeles`);
    } else if (tc === 1) {
        console.log(`El ancho del Content-box es de:  ${a} pixeles`);

    } else
        console.log("Ingreso mal los datos");
}