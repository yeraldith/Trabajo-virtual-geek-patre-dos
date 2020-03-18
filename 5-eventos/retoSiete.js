//Ejercicio siete
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.ver');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    list.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li>
<li>${eternalSunshineOfTheSM}</li> <li>${blueVelvet}</li>
<li>${split}</li>`;

});

list.addEventListener('click', function(event) {
    console.log("Mi pelicula favorita es: " + event.target.innerHTML)
});