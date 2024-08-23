document.getElementById('formulario').onsubmit = function(event) {

const matricula = document.getElementById('digiteMatricula').value;
const livre = document.getElementById('livre');
const hora = document.getElementById('hourParagraph');
const pessoa = document.getElementById('person_badge');
const bookmark = document.getElementById('bookmark');

    if (matricula.length < 5) {

        livre.style.filter = 'hue-rotate(-90deg)';
        hora.style.filter = 'hue-rotate(-90deg)';
        pessoa.style.filter = 'hue-rotate(-90deg)';
        bookmark.style.filter = 'hue-rotate(-90deg)';
        event.preventDefault();
    }
}