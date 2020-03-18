const color = document.querySelector('.body');

function bgcolor(bg) {
    if (bg.keyCode === 82) {
        color.classList.add('red');
        color.classList.remove('purple');
    }

    if (bg.keyCode === 77) {
        color.classList.add('purple');
        color.classList.remove('red');
    }
}

document.addEventListener('keydown', bgcolor);