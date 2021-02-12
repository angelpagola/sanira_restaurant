/*Selecciona todos los elementos que tienen la clase .gallery__img*/
let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('.modal__img');
let txt = document.querySelector('#modal__cabecera');
let boton = document.querySelector('.modal__boton');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function(e) {
        modal.classList.toggle('modal--open');
        /*Obtiene la ruta de la imagen de la imagen seleccionada */
        let src = e.target.src;
        let alt = e.target.alt;
        img.setAttribute('src', src);
        txt.setAttribute('value', alt);

    });
}

boton.addEventListener('click', function() {
    /*agrega si no tiene, si tienes lo quita*/
    modal.classList.toggle('modal--open');
});