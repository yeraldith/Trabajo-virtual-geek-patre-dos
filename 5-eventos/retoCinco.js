//Ejercicio Cinco
//llamado de informacion
const li1 = document.getElementById('li1');
const span1 = document.getElementById('span1');
const button = document.getElementById('button');

//accionar el evento 
button.addEventListener('click', function() {
    li1.classList.toggle('teacher--selected');
    span1.classList.toggle('favorite');
    if (span1.textContent == 'Agregar') {
        li1.classList.remove('tteacher--selected');
        li1.classList.add('inicio');
        span1.classList.remove('favorite');
        span1.classList.add('inicio');
        span1.textContent = 'Quitar';
    } else {
        span1.textContent = 'Agregar';
        li1.classList.add('teacher--selected');
        li1.classList.remove('inicio');
        span1.classList.add('favorite');
        span1.classList.remove('inicio');
    }
});
//delegación 
li1.addEventListener('click', (e) => {
    e.preventDefault();
    button.click();
});