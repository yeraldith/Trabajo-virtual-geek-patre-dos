const parrafo = document.querySelector('.parrafo');

function agregar() {
    parrafo.innerHTML = parrafo.innerHTML + '<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat reiciendis et recusandae deleniti sit nihil eaque ipsa doloremque quia cupiditate nulla fuga maiores tenetur voluptates, dolores saepe ipsum ? Voluptates, perferendis ? < /p>';
}
parrafo.addEventListener('mouseover', agregar);