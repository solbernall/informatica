function verificarEdad() {
  let edad = prompt("Ingrese su edad:");
  edad = Number(edad);

  if (edad >= 18) {
    alert("Acceso permitido ✅");
  } else {
    alert("Acceso denegado ❌");
  }
}
