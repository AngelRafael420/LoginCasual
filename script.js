// Variables para el cronómetro
let tiempo = 0; // en segundos
let cronometro;

// Elementos del DOM
const reloj = document.getElementById("reloj");
const iniciarBtn = document.getElementById("iniciar");
const detenerBtn = document.getElementById("detener");
const resetearBtn = document.getElementById("resetear");

// Función para formatear el tiempo
function formatearTiempo(tiempo) {
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
    cronometro = setInterval(function() {
        tiempo++;
        reloj.textContent = formatearTiempo(tiempo);
    }, 1000); // actualiza cada segundo
    iniciarBtn.disabled = true;
    detenerBtn.disabled = false;
}

// Función para detener el cronómetro
function detenerCronometro() {
    clearInterval(cronometro);
    iniciarBtn.disabled = false;
    detenerBtn.disabled = true;
}

// Función para resetear el cronómetro
function resetearCronometro() {
    tiempo = 0;
    reloj.textContent = formatearTiempo(tiempo);
    iniciarBtn.disabled = false;
    detenerBtn.disabled = true;
}

// Asignar eventos a los botones
iniciarBtn.addEventListener("click", iniciarCronometro);
detenerBtn.addEventListener("click", detenerCronometro);
resetearBtn.addEventListener("click", resetearCronometro);

// Inicialmente, deshabilitar el botón "Detener" y "Resetear"
detenerBtn.disabled = true;
resetearBtn.disabled = false;
