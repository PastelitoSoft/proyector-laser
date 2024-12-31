let abecedario = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


const boton = document.getElementById('maquina');
const luz = document.getElementById('luz');
const letras = document.getElementById('letras');
const audio = document.getElementById('audio');

function seleccionarLetraAleatoria() {
    if (abecedario.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * abecedario.length);
        const letraSeleccionada = abecedario.splice(indiceAleatorio, 1)[0];
        letras.src = `./res/img/letras/${letraSeleccionada}.png`;

        // Simular deshabilitar el botón
        boton.classList.add('disabled');

        iniciarParpadeo();
    } else {
        letras.src = `./res/img/fin.png`;
        boton.addEventListener('click', () => {
            if (!boton.classList.contains('disabled')) {
                location.reload();
            }
        });
    }
}


function iniciarParpadeo() {
    // Añadir la clase de animación
    luz.classList.add('parpadeo');
    letras.classList.add('parpadeo');
    audio.play();

    // Detener la animación después de 2 segundos
    setTimeout(() => {
        luz.classList.remove('parpadeo');
        letras.classList.remove('parpadeo');

        // Simular habilitar el botón nuevamente
        boton.classList.remove('disabled');
    }, 1500);
}

// Evento cuando el DOM se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    letras.src = `./res/img/inicio.png`;
});

// Evento al hacer clic en el botón
boton.addEventListener('click', () => {
    if (!boton.classList.contains('disabled')) {
        seleccionarLetraAleatoria();
    }
});
