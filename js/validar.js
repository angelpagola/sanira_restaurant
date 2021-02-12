function validar() {
    var nombres, correo, telefono, mensaje, expresion;
    nombres = document.getElementById("nombres").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;

    /*Espresiones para validar correro textonumero+@+textonumero+punto+solotexto*/
    expresion = /\w+@\w+\.+[a-z]/;


    if (nombres === "" || correo === "" || telefono === "" || mensaje === "") {
        alert("Todos los campos son obligatorios");
        /*Para que no envie datos y que permanesca en la pagina */
        return false;
    } else
    if (nombres.length > 60) {
        alert("Los nombres y apellidos son muy largos");
        return false;
    } else if (correo.length > 50) {
        alert("El correo es muy largo");
        return false;
    } else if (!expresion.test(correo)) {
        alert("El correo no es valido");
        return false;
    } else if (telefono.length !== 9) {
        alert("El telefono no tiene 9 digitos");
        return false;
        /*Si el telefono no es un número */
    } else if (isNaN(telefono)) {
        alert("El telefono tiene caracteres");
        return false;
    } else if (mensaje.length > 400) {
        alert("El mensaje tienes muchos caracteres");
        return false;
    }
}