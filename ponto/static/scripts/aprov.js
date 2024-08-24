document.getElementById('formulario').onsubmit = function(event) {

const matricula = document.getElementById('digiteMatricula').value;
const livre = document.getElementById('livre');
const hora = document.getElementById('hourParagraph');
const pessoa = document.getElementById('person_badge');
const bookmark = document.getElementById('bookmark');

    if (matricula.length < 5) {

        livre.style.backgroundColor = '#FFFFFF';
        hora.style.backgroundColor = '#FFFFFF';
        pessoa.style.backgroundColor = '#FFFFFF';
        bookmark.style.backgroundColor = '#FFFFFF';
        event.preventDefault();
    }
}