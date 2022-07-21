// Bloque para abrir y cerrar el menú lateral

// var aside = document.querySelector('aside');
// var burger = document.querySelector('.burger');

// burger.addEventListener('click', function () {
//     aside.classList.toggle('open');
//     burger.classList.toggle('open');
// })

// Opción del mismo código pero ejecutado con JQuery
// JQuery se usa dentro de código JavaScript

$(document).ready(function () { // Asegurarnos que la página está cargada
    // Usamos los métodos JQuery
    $('.burger').click(function () {
        $('aside').toggleClass('open');
        $('.burger').toggleClass('open');
    })
})

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


// Bloque para añadir el texto del copyright

document.querySelector('.copyright').innerHTML = '&copy; ' + new Date().getFullYear() + ' Real State S.A.';