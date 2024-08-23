const horas = new Date().getHours();
const min = new Date().getMinutes();

const hora = document.getElementById('hourParagraph');
hora.textContent = horas + "h " + min + "min";