/*Array*/
var inputs = document.getElementsByClassName('formulario__input-txt');

for (var i = 0; i <= inputs.length; i++) {
    /*addEnvenListener=Escuchar un evento
    Evento cuando sueltas una tecla=keyup*/
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });

}