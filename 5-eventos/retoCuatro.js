const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.ver');

button.addEventListener('click', function() {
    const lista = document.getElementById('listado');
    lista.innerHTML = `<li>${inception}</li> <li>${theButterFlyEffect}</li>
<li>${eternalSunshineOfTheSM}</li> <li>${blueVelvet}</li>
<li>${split}</li>`;

});

const evento1 = document.getElementById('lis1');
evento1.addEventListener('click', function() {
    console.log("Mi pelicula favorita es: " + evento1.innerHTML)
});
const evento2 = document.getElementById('lis2');
evento2.addEventListener('click', function() {
    console.log("Mi pelicula favorita es: " + evento2.innerHTML)
});
const evento3 = document.getElementById('lis3');
evento3.addEventListener('click', function() {
    console.log("Mi pelicula favorita es: " + evento3.innerHTML)
});
const evento4 = document.getElementById('lis4');
evento4.addEventListener('click', function() {
    console.log("Mi pelicula favorita es: " + evento4.innerHTML)
});
const evento5 = document.getElementById('lis5');
evento5.addEventListener('click', function() {
    console.log("Mi pelicula favorita es: " + evento5.innerHTML)
});