
let nombre, email, clave, clave_ok;
var ok = true;


function validar() {
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    clave = document.getElementById("clave").value;
    clave_ok = document.getElementById("clave_ok").value;
    error1 = document.getElementById("error1");


    if (nombre.length == 0) {
        document.getElementById('error1').classList.add("visible");
        document.getElementById("ko_nombre").style.display = "flex";
        document.getElementById("nombre").style.borderColor = "red";
        ok = false;



    } else {

        document.getElementById("ok_nombre").style.display = "flex";
        document.getElementById('error1').classList.add("ocultar");
        document.getElementById("nombre").style.borderColor = "green";
        document.getElementById("ko_nombre").style.display = "none";
        ok = true;


    }

    validarEmail();
}



function validarEmail(email) {
    email = document.getElementById("email").value;
    error2 = document.getElementById("error2");
    error_email = document.getElementById("error_email");

    var expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
    var esValido = expReg.test(email);

    if (email.length == 0) {
        document.getElementById('error_email').classList.add("visible");
        document.getElementById("ko_email").style.display = "flex";
        document.getElementById("email").style.borderColor = "red";
        ok = false;
    }

    else if (esValido == false) {
        document.getElementById('error2').classList.add("visible");
        document.getElementById('error_email').classList.add("ocultar");
        ok = false;

    }
    else {

        document.getElementById("ok_email").style.display = "flex";
        document.getElementById('error_email').classList.add("ocultar");
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("ko_email").style.display = "none";
        document.getElementById('error_2').classList.add("ocultar");
        ok = true;


    }

    validarPassword();
}

function validarPassword(clave, clave_ok) {

    clave = document.getElementById("clave").value;
    clave_ok = document.getElementById("clave_ok").value;


    if (clave.length == 0) {
        document.getElementById('error_clave').classList.add("visible");
        document.getElementById("ko_clave").style.display = "flex";
        document.getElementById("clave").style.borderColor = "red";
        ok = false;


    }

    else if (clave.length < 8) {
        document.getElementById('error3').classList.add("visible");
        document.getElementById('error_clave').classList.add("ocultar");
        document.getElementById("ko_clave").style.display = "flex";
        document.getElementById("clave").style.borderColor = "red";
        ok = false;

    }

    else {
        document.getElementById("ok_clave").style.display = "flex";
        document.getElementById('error3').classList.add("ocultar");
        document.getElementById("clave").style.borderColor = "green";
        document.getElementById("ko_clave").style.display = "none";
        ok = true;

    }
    validarPassword_2();
}

function validarPassword_2() {
    if (clave != clave_ok) {
        document.getElementById("icono_error_clave").style.display = "flex"
        document.getElementById('error4').classList.add("visible"); //mensaje
        document.getElementById("clave_ok").style.borderColor = "red";;//borde
        document.getElementById('clave2').classList.add("ocultar");
        ok = false;



    } else if (clave_ok.length == 0) {
        document.getElementById('clave2').classList.add("visible"); //mensaje
        document.getElementById("icono_error_clave").style.display = "flex";//icono
        document.getElementById("clave_ok").style.borderColor = "red"; //borde
        ok = false;


    } else {
        document.getElementById("icono_check_clave").style.display = "flex";
        document.getElementById('clave2').classList.add("ocultar");
        document.getElementById('error4').classList.add("ocultar");
        document.getElementById("clave_ok").style.borderColor = "green";
        document.getElementById("icono_error_clave").style.display = "none";
        ok = true;


    }
    comprobar();
}



function comprobar() {
    if (ok == true) {
        alert("FORMULARIO ENVIADO CORRECTAMENTE")
    }

}









