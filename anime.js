document.addEventListener('DOMContentLoaded', function () {
 const title = document.getElementById('title');
 const quote = document.getElementById('quote');
 
 // Animaciones de texto
 setTimeout(() => {
     title.style.animation = 'none'; // Reiniciar animación
     title.style.animation = 'pulsate 1.5s infinite alternate'; // Reiniciar pulsación
 }, 5000);

 // Animación de entrada
 title.style.opacity = 0;
 quote.style.opacity = 0;

 setTimeout(() => {
     title.style.opacity = 1;
     quote.style.opacity = 1;
 }, 1000);
});