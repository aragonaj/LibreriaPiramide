// INTERSECTION OBSERVER - fuentes: 
//  - https://www.youtube.com/watch?v=T8EYosX4NOo, 
//  - https://www.youtube.com/watch?v=X1eCDd3ngKw, 
//  - https://www.youtube.com/watch?v=2IbRtjez6ag, 
//  - https://www.youtube.com/watch?v=RxnV9Xcw914
// --------------------------------------------------------------------------------------------\\
// --------------------------------------------------------------------------------------------\\
// lazy loading de las secciones del main
//accedo a los elementos:
const secciones = document.querySelectorAll('.seccion-main');

// creo el observador que se encargará de registrar cada cambio
const observadorSecciones = new IntersectionObserver(entries => {
    entries.forEach(elemento => {
        elemento.target.classList.toggle("mostrar", elemento.isIntersecting);
    });
}, {
    threshold: 0.3,
});

secciones.forEach(seccion => {
    observadorSecciones.observe(seccion);
});
// --------------------------------------------------------------------------------------------\\
// --------------------------------------------------------------------------------------------\\
// las secciones se ocultan al hacer scroll cuando llegan a la sección que se indica en el "querySelector"
// accedo a los elementos
const seccionSuperior = document.querySelector('.header-container-info');
const seccionTercerNivel = document.querySelector('.header-container-business');
const seccionInferior = document.querySelector('.header-container-sections');

const seccion = document.querySelector('.seccion-blog');

const opcionesSeccion = {
    threshold: 0.5,
}

// creo el observador que se encarga de comprobar cuándo llega el fin de la sección
observadorSeccion = new IntersectionObserver(function(entries, observadorSeccion) {
    entries.forEach(elemento => {
        if(!elemento.isIntersecting) {
            // añado una clase a cada elemento sección
            // con propiedades para que se oculte
            seccionSuperior.classList.add("ocultar");
            seccionTercerNivel.classList.add("ocultar");
            seccionInferior.classList.add("ocultar");
        } else {
            seccionSuperior.classList.remove("ocultar");
            seccionTercerNivel.classList.remove("ocultar");
            seccionInferior.classList.remove("ocultar");
        }
    });
}, opcionesSeccion);

observadorSeccion.observe(seccion);
// --------------------------------------------------------------------------------------------\\
// --------------------------------------------------------------------------------------------\\
// el header desaparece por completo al llegar al footer
// accedo a los elementos
const seccionSegundoNivel = document.querySelector('.header-container-user');
const footer = document.querySelector('.footer');

const opcionesFooter = {
    threshold: 0.5,
}

function observar(entries) {
    let entry = entries[0]; /* solamente se dirigen al primer elemento "footer" */
    if(entry.isIntersecting) {
        seccionSegundoNivel.classList.add('ocultar');
    } else {
        seccionSegundoNivel.classList.remove('ocultar')
    }
}

observadorFooter = new IntersectionObserver(observar , opcionesFooter);

observadorFooter.observe(footer);

// Al pulsar el botón de la margen derecha, el usuario volverá arriba de la página web

// accedo al botón
// const botonVolver = document.getElementById('boton-volver');

// se añado una escucha para que al ser pulsado
// envíe la vista al tope de la página suavemente
// botonVolver.addEventListener('click', () => {
//     window.scrollTo(
//         {
//             top: 0,
//             behavior: 'smooth',
//         }
//     );
// });
// --------------------------------------------------------------------------------------------\\
// --------------------------------------------------------------------------------------------\\
// Al pulsar por los botones de las secciones de scroll horizontal, 
// puedes desplazarte también gracias a los botones laterales
// SECCIÓN RECOMENDACIONES
function desplazarseIzquierdaRecomendaciones(){
    // accedemos al elemento
    const desplazamientoIzquierdaRecomendaciones = document.querySelector('.scroll-suggestions');

    // el botón correspondiente contiene el onclick que activa la función
    // al hacerlo, provoca que el contenido realice lo siguiente:
    desplazamientoIzquierdaRecomendaciones.scrollBy({
        // no existe la derecha, por eso hay que emplear el "left":
        // está pensado como una descripción de coordenadas cartesianas.
        // Solo se puede emplear: izquierda y arriba
        left: -300, // muévete hacia la izquierda. Hay que emplear valores negativos
        behavior: 'smooth', // hazlo suavemente
    });
}

function desplazarseDerechaRecomendaciones(){
    // accedemos al elemento
    const desplazamientoDerechaRecomendaciones = document.querySelector('.scroll-suggestions');

    // se emplea el mismo concepto que en la anterior función
    desplazamientoDerechaRecomendaciones.scrollBy({
        left: 300,
        behavior: 'smooth',
    });
}
//SECCIÓN AUTORES
function desplazarseIzquierdaAutores(){
    // accedemos al elemento
    const desplazamientoIzquierdaAutores = document.querySelector('.scroll-authors');

    // el botón correspondiente contiene el onclick que activa la función
    // al hacerlo, provoca que el contenido realice lo siguiente:
    desplazamientoIzquierdaAutores.scrollBy({
        // no existe la derecha, por eso hay que emplear el "left":
        // está pensado como una descripción de coordenadas cartesianas.
        // Solo se puede emplear: izquierda y arriba
        left: -300, // muévete hacia la izquierda. Hay que emplear valores negativos
        behavior: 'smooth', // hazlo suavemente
    });
}

function desplazarseDerechaAutores(){
    // accedemos al elemento
    const desplazamientoDerechaAutores = document.querySelector('.scroll-authors');

    // se emplea el mismo concepto que en la anterior función
    desplazamientoDerechaAutores.scrollBy({
        left: 300,
        behavior: 'smooth',
    });
}
// --------------------------------------------------------------------------------------------\\
// --------------------------------------------------------------------------------------------\\
// Al situarse el usuario en el tope de la página, el botón que permite 
// llegar hasta arriba rápidamente
const seccionVisible = document.querySelector('.seccion-recomendacion'); /* escribir el nombre de la segunda sección del main */

function seccionEsVisible(entries){
    /* En este caso hay que emplear un forEach porque se trata de una colección */
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            botonVolver.style.visibility = "hidden";
        } else {
            botonVolver.style.visibility = "visible";
        }
    });
}

const opcionesSeccionVisible = {
    threshold: 0.5,
}

// creo el observador que se encargará de registrar cada cambio
// const observadorSeccionesVisibles = new IntersectionObserver(seccionEsVisible, opcionesSeccionVisible);
// observadorSeccionesVisibles.observe(seccionVisible);
// --------------------------------------------------------------------------------------------\\
// --------------------------------------------------------------------------------------------\\
const menubars = document.querySelector('.container-menu-bars');
const hiddenMenu = document.querySelector('.container-hidden-menu');

menubars.addEventListener('click', ()=> {
    menubars.classList.toggle('active');
    hiddenMenu.classList.toggle('active');
});