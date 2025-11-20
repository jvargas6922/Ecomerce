$(document).ready(function() {
    console.log("jquery activo")
})

let usuario = "admin"
let password = "admin123"

$("#btnLogin").click(function(){
    console.log("click en login")
    let email = $("#email").val();
    let pass = $("#password").val();

    if(email === usuario && pass === password){
        // redirigo al usuario a la pagina principal a la pagina inicio.html
        window.location.href = "inicio.html";
    }
})
