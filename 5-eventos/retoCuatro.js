const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.ver');

//Agregar listado 
button.addEventListener('click', function() {
    const lista = document.getElementById('listado');
    lista.innerHTML = `<li id="li1">${inception}</li> <li id="li2">${theButterFlyEffect}</li>
<li id="li3">${eternalSunshineOfTheSM}</li> <li id="li4">${blueVelvet}</li>
<li id="li5">${split}</li>`;
    //llamado elementos listado
    const li1 = document.querySelector('#li1');
    const li2 = document.querySelector('#li2');
    const li3 = document.querySelector('#li3');
    const li4 = document.querySelector('#li4');
    const li5 = document.querySelector('#li5');

    li1.addEventListener('click', list1);
    li2.addEventListener('click', list2);
    li3.addEventListener('click', list3);
    li4.addEventListener('click', list4);
    li5.addEventListener('click', list5);
});

const list1 = () => {
    console.log(`Mi pelicula favorita es: ${inception}`);
};
const list2 = () => {
    console.log(`Mi pelicula favorita es: ${theButterFlyEffect}`);
};

const list3 = () => {
    console.log(`Mi pelicula favorita es: ${eternalSunshineOfTheSM}`);
};

const list4 = () => {
    console.log(`Mi pelicula favorita es: ${blueVelvet}`);
};

const list5 = () => {
    console.log(`Mi pelicula favorita es: ${split}`);
};