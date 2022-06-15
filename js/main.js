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

// Bloque para abrir y cerrar el menú lateral

var aside = document.querySelector('aside');
var burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    aside.classList.toggle('open');
    burger.classList.toggle('open');
})

// Bloque para añadir el texto del copyright

document.querySelector('.copyright').innerHTML = '&copy; ' + new Date().getFullYear() + ' Real State S.A.';