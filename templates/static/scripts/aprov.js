document.getElementById('formulario').onsubmit = function(event) {

const matricula = document.getElementById('digiteMatricula').value;
const livre = document.getElementById('livre');
const hora = document.getElementById('hourParagraph');
const pessoa = document.getElementById('person_badge');

    if (matricula.length < 5) {

        livre.style.backgroundColor = '#8B0000';
        hora.style.color = '#8B0000';
        pessoa.style.filter = 'hue-rotate(-90deg) brightness(70%)';
        event.preventDefault();
    }
}