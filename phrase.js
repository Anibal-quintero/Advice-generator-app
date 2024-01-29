document.addEventListener('DOMContentLoaded', function () {
  // Código que se ejecutará cuando el DOM esté completamente cargado
  obtenerConsejoAleatorio();
});

// Accede al botón y agrega un evento de clic
const btn = document.querySelector('.btn');
btn.addEventListener('click', obtenerConsejoAleatorio);

// Accede al elemento del DOM donde deseas mostrar la frase
const contenedorFrase = document.querySelector('.p');
let loading;

function obtenerConsejoAleatorio() {
  // Genera un número aleatorio
  let number = obtenerNumeroAleatorio();

  // Muestra el número aleatorio en el header
  const deviceNumber = document.querySelector('.adviceNumber');
  deviceNumber.textContent = `#${number}`;

  const apiUrl = `https://api.adviceslip.com/advice/${number}`;
  contenedorFrase.textContent = 'Loading...'
  fetch(apiUrl)
    .then(res => { return res.json() })
    .then(data => loading = data.slip.advice)
    .catch(error => console.log(error))
  .finally(() => contenedorFrase.textContent = `“${loading}”`)
}

// Función para obtener un número aleatorio entre 1 y 224
function obtenerNumeroAleatorio() {
  return Math.floor(Math.random() * 224) + 1;
}
