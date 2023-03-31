const animacion = document.querySelector('#animacion');
let i = 0;
let txt = animacion.innerHTML;
animacion.innerHTML = '';

function typeWriter() {
  if (i < txt.length) {
    animacion.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  animacion.style.opacity = 1;
  typeWriter();
});
