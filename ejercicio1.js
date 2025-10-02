// Ejercicio 1: contador
let valor = 10;

function disminuir() {
  if (valor > 0) {
    valor--;
    document.getElementById("contador.html").innerText = valor;
  }
}

// Ejercicio 2: cambiar colores
function cambiarColor(fondo, texto) {
  document.body.style.backgroundColor = fondo;
  document.getElementById("texto").style.color = texto;
}
