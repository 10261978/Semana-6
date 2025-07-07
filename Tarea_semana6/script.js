const form = document.getElementById("registroForm");
const enviarBtn = document.getElementById("enviar");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");

const errores = {
  nombre: document.getElementById("error-nombre"),
  correo: document.getElementById("error-correo"),
  contrasena: document.getElementById("error-contrasena"),
  confirmar: document.getElementById("error-confirmar"),
  edad: document.getElementById("error-edad"),
};

function validarNombre() {
  if (nombre.value.trim().length < 3) {
    errores.nombre.textContent = "Debe tener al menos 3 caracteres.";
    nombre.classList.add("invalid");
    return false;
  }
  errores.nombre.textContent = "";
  nombre.classList.remove("invalid");
  return true;
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo.value)) {
    errores.correo.textContent = "Correo electrónico inválido.";
    correo.classList.add("invalid");
    return false;
  }
  errores.correo.textContent = "";
  correo.classList.remove("invalid");
  return true;
}

function validarContrasena() {
  const regex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  if (!regex.test(contrasena.value)) {
    errores.contrasena.textContent = "Mínimo 8 caracteres, un número y un símbolo.";
    contrasena.classList.add("invalid");
    return false;
  }
  errores.contrasena.textContent = "";
  contrasena.classList.remove("invalid");
  return true;
}

function validarConfirmar() {
  if (contrasena.value !== confirmar.value) {
    errores.confirmar.textContent = "Las contraseñas no coinciden.";
    confirmar.classList.add("invalid");
    return false;
  }
  errores.confirmar.textContent = "";
  confirmar.classList.remove("invalid");
  return true;
}

function validarEdad() {
  if (parseInt(edad.value) < 18 || isNaN(parseInt(edad.value))) {
    errores.edad.textContent = "Debes ser mayor de 18 años.";
    edad.classList.add("invalid");
    return false;
  }
  errores.edad.textContent = "";
  edad.classList.remove("invalid");
  return true;
}

function validarFormulario() {
  const esValido =
    validarNombre() &&
    validarCorreo() &&
    validarContrasena() &&
    validarConfirmar() &&
    validarEdad();

  enviarBtn.disabled = !esValido;
  return esValido;
}

[nombre, correo, contrasena, confirmar, edad].forEach(input => {
  input.addEventListener("input", validarFormulario);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarFormulario()) {
    alert("Formulario enviado correctamente 🎉");
    form.reset();
    enviarBtn.disabled = true;
  }
});
