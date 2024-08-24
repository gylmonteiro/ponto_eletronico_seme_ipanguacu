document.getElementById('login').addEventListener('click', () => {
    const matricula = document.getElementById('digiteMatricula').value;
    const timeParagraph = document.querySelectorAll('.timeParagraph');
    const hourParagraph = document.getElementById('hourParagraph');
    const submitButton = document.getElementById('submit')
    const bookmark = document.getElementById('bookmark');
    
    if (matricula.length === 5) {
        //cria novo objeto de data pra pegar data atual
        const agora = new Date();

        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');

        const dia = agora.getDate().toString().padStart(2, '0');
        const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const mes = mesesDoAno[agora.getMonth()];
        const ano = agora.getFullYear();

        const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const diaSemana = diasDaSemana[agora.getDay()];

        timeParagraph[1].textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
        hourParagraph.textContent = `${horas}h ${minutos}min`;

        bookmark.src = "img/building-fill-check 2.png";

        //limpa o input após confirmar
        document.getElementById('digiteMatricula').value = "";

        
    } 

    else {
        submitButton.style.backgroundColor = "#B71818";
        bookmark.src = "img/building-fill-x 1.png";
        hourParagraph.style.color = "#B71818";
    }
});
