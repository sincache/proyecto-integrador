let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let email = document.getElementById("email");
let botonEnviar = document.getElementById("enviar-formulario");

function soloLetras(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
}

function validarEmail(direccionEmail) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(direccionEmail);
}

function validarTelefono(numeroTelefonico) {
    return /^\d{10}$/.test(numeroTelefonico);
}


function validarCampos() {
    if (soloLetras(nombre.value) == false) {
        alert("El campo nombre solo puede contener letras y espacios");
        return false;
    } else if (validarTelefono(telefono.value) == false) {
        alert("El campo Teléfono debe de contener solo números y 10 dígitos numéricos");
        return false;
    } else if (validarEmail(email.value) == false) {
        alert("El formato del correo electrónico es invalido");
        return false;
    } else
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        return true;
}

botonEnviar.addEventListener("click", function(event){
    event.preventDefault(); // previene el refresh antes de llenar correctamente
    if (validarCampos()) {
        location.reload(); //hace refresh a la página al llenar correctamente
    };
});
