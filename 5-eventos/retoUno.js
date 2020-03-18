//Ejercicio Uno
const button = document.querySelector('.alert');
const parrafo = document.querySelector('.parrafo');
button.addEventListener('click', function agregar() {
    parrafo.innerHTML = '<p>Mi primer click, ¡ole yo y la mujer que me parió!</p>';
});