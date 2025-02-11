let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let email = document.getElementById("email");
let botonEnviar = document.getElementById("submit");

function soloLetras(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
}

function validarEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validarTelefono(telefono) {
    return /^\d{10}$/.test(telefono);
}


function validarCampos() {
    if (soloLetras(nombre.value) == false) {
        alert("El campo nombre solo puede contener letras y espacios");

    } else if (validarTelefono(telefono.value) == false) {
        alert("El campo Teléfono debe de contener solo números y 10 dígitos numéricos");

    } else if (validarEmail(email.value) == false) {
        alert("El formato del correo electrónico es invalido");

    } else
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
}




//  document.getElementById('contactForm').addEventListener('submit', function (e) {
//             e.preventDefault(); */
//             alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
//              document.getElementById('contactForm').reset(); */