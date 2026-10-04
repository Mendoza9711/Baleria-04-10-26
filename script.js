const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
        
        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *") ) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});
// 1. Seleccionamos el contenedor principal de la carta y el audio
const sobreCompleto = document.querySelector('.envelope-wrapper');
const musica = document.getElementById('musica-fondo');

// Ajustamos el volumen de la música (opcional, 0.5 es el 50%)
musica.volume = 0.6; 

// 2. Escuchamos el clic en cualquier parte de la carta
if (sobreCompleto) {
    sobreCompleto.addEventListener('click', (evento) => {
        
        // Esto asegura que la música intente reproducirse inmediatamente al interactuar
        if (musica.paused) {
            musica.play()
                .then(() => {
                    console.log("La música se está reproduciendo correctamente.");
                })
                .catch(error => {
                    console.log("Error al reproducir el audio: ", error);
                });
        }
        
    });
}
