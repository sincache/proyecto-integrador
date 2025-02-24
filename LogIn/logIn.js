document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let terms = document.getElementById("terms").checked;
    
    if (!terms) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }
    
    alert("Inicio de sesión exitoso para " + email);
});
