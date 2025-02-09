
//AAAAAAAAHHHH YA ME VOLVI LOCO INTENTANDO QUE LA VALIDACION FUNCIONE

const { trueFunc } = require("boolbase");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
    // Obtener los valores de los inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = trueFunc ;

    if (name === "") {
      document.getElementById("name").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("name").classList.remove("is-invalid");
    }

    if (email === "" || !validateEmail(email)) {
      document.getElementById("email").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("is-invalid");
    }

    if (message === "") {
      document.getElementById("message").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("message").classList.remove("is-invalid");
    }

    // Si el formulario es válido, enviar los datos
    if (isValid) {
      sendEmail(name, email, message);
    
  });

// Función para validar el correo electrónico
function validateEmail(email) {
  const regex =
  return regex.test(email);
};

// Función para enviar los datos (simulación)
function sendEmail(name, email, message) {
  console.log("Datos enviados:");
  console.log("Nombre:", name);
  console.log("Correo:", email);
  console.log("Mensaje:", message);

  alert("¡Formulario enviado con éxito!");
};