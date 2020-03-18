//Ejercicio 2 cómo te llamas
const button = document.querySelector('.accion');
const input = document.querySelector('.text');

function accion() {
    console.log('Hola   ' + input.value);
}
button.addEventListener('click', accion);