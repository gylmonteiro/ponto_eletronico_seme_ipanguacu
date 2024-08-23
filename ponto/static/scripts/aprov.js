document.getElementById('formulario').onsubmit = function(event) {
const matricula = document.getElementById('digiteMatricula').value;
const livre = document.getElementById('livre');

    if (matricula.length < 5) {
        alert('A senha deve ter pelo menos 5 caracteres.'); 
        event.preventDefault();
    }
}