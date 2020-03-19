const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.ver');
const lista = document.getElementById('listado');

//Agregar listado 
button.addEventListener('click', function() {
    lista.innerHTML = `<li id="li1">${inception}</li> <li id="li2">${theButterFlyEffect}</li>
<li id="li3">${eternalSunshineOfTheSM}</li> <li id="li4">${blueVelvet}</li>
<li id="li5">${split}</li>`;
});

//mostrar en consola el listado
lista.addEventListener('click', () => {
    console.log("Mi pelicula favorita es: " + inception);
    console.log("Mi pelicula favorita es: " + theButterFlyEffect);
    console.log("Mi pelicula favorita es: " + eternalSunshineOfTheSM);
    console.log("Mi pelicula favorita es: " + blueVelvet);
    console.log("Mi pelicula favorita es: " + split);

})