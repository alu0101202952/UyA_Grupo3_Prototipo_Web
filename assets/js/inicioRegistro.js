//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");



//FUNCIONES
function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();

// Función que presenta visualmente el formulario de registro
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

// Función que presenta visualmente el formulario de registro
function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function validacion_inicio() {
    correo = document.getElementById("login_email").value;
    contrasenia = document.getElementById("login_password").value;

    if (!(/^([da-z_.-]+)@([da-z.-]+).([a-z.])$/.test(correo))) {
        alert('[ERROR] El campo "Correo Electrónico" es incorrecto.\n El correo tiene que ser: ejemplo@gmail.com o ejemplo@hotmail.com');
        return false;
    } else if (contrasenia == null || contrasenia.length == 0 || contrasenia.length < 8) {
        alert('[ERROR] El campo "Contraseña" es incorrecto.\n La contraseña ha de ser de mínimo 8 caracteres alfa-numéricos');
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}

const validacion_registro = () => {
    const correo = document.getElementById("reg_email").value;
    const contrasenia = document.getElementById("reg_password").value;
    const nombre = document.getElementById("name").value;
    const usuario = document.getElementById("user").value;
    const anio = document.getElementById("year").value;

    if (!(/^([da-z_.-]+)@([da-z.-]+).([a-z.])$/.test(correo))) {
        alert('[ERROR] El campo "Correo Electrónico" es incorrecto.\n El correo tiene que ser: ejemplo@gmail.com o ejemplo@hotmail.com');
        return false;
    } else if (contrasenia == null || contrasenia.length == 0 || contrasenia.length < 8) {
        alert('[ERROR] El campo "Contraseña" es incorrecto.\n La contraseña ha de ser de mínimo 8 caracteres alfa-numéricos');
        return false;
    } else if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('[ERROR] Nombre: Campo de texto OBLIGATORIO');
        return false;
    } else if (usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
        alert('[ERROR] Usuario: Campo de texto OBLIGATORIO');
        return false;
    } else if (!anio) {
        alert(`[ERROR] Año:${anio} Campo de texto OBLIGATORIO`);
        return false;
    }

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}