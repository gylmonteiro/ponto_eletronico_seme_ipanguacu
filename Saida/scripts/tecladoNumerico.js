const tecladoNumerico = document.querySelectorAll('.tecladoNumerico');
const numeroMatricula = document.getElementById('digiteMatricula');
const backspace = document.getElementById('backspace');

tecladoNumerico.forEach(botao => {
    botao.addEventListener('click', function() {
        if (numeroMatricula.value.length < 5) {
            numeroMatricula.value += botao.value;
        }
    });
});

backspace.addEventListener('click', function() {
    numeroMatricula.value = numeroMatricula.value.slice(0, -1);
});