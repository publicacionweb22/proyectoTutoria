// Bloque para cambiar la clase CSS de la cabecera

var primeraSeccion = document.getElementById('first');
var header = document.querySelector('header');

window.addEventListener('scroll', function () {
    var posicionScroll = window.scrollY;
    var posicionPrimeraSeccion = primeraSeccion.getBoundingClientRect().top;
    if (posicionScroll < (posicionPrimeraSeccion + posicionScroll)) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
})