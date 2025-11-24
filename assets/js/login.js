$(document).ready(function() {
    console.log("jquery activo")
})

let usuario = "admin@admin.com"
let password = "admin123"

// Capturo los datos del formulario luego de darle click al boton de login
$("#loginForm").submit(function(event){
    // me permite prevenir el comportamiento por defecto del formulario(recargar la pagina)
    event.preventDefault();
    let email = $("#email").val();
    let pass = $("#password").val();
    if(email === usuario && pass === password){
        // redirigo al usuario a la pagina principal a la pagina inicio.html
        window.location.href = "inicio.html";
    }
    
});
