//Ejercicio Cinco
//const section = document.querySelector('.section1');
//section.querySelector('teacher--selected', 'favorite');
const li1 = document.getElementById('li1');
const button = document.getElementById('button');
const span1 = document.getElementById('span1');

button.addEventListener('click', function() {
    li1.classList.toggle('teacher--selected');
    span1.classList.toggle('favorite');
    if (span1.textContent == 'Agregar') {
        span1.textContent = 'Quitar';
    } else {
        span1.textContent = 'Agregar';
    }

});