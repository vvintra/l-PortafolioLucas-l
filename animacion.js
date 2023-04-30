const animacion = document.querySelector('#animacion');
const txt = "¡Hola! Mi nombre es Lucas y soy un apasionado de la tecnología y la programación. Te doy la bienvenida a mi portafolio.";

function escribirTexto(velocidad) {
  let i = 0;
  const longitud = txt.length;
  animacion.textContent = '';
  const escribir = setInterval(function() {
    if (i < longitud) {
      animacion.textContent += txt.charAt(i);
      i++;
    } else {
      clearInterval(escribir);
    }
  }, velocidad);
}

if (animacion) {
  animacion.style.opacity = 1;
  escribirTexto(50);
}
