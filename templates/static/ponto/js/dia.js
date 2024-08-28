const diasDaSemana = ["Domingo", "Segunda feira", "Terça feira", "Quarta feira", "Quinta feira", "Sexta feira", "Sábado"]; 
const dataAtual = new Date();
const diaDaSemana = dataAtual.getDay();

const dia = new Date().getDate();

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const mesAtual = new Date();
const mes = mesAtual.getMonth();

const ano = new Date().getFullYear();

const containerData = document.getElementById('containerData');
containerData.textContent = diasDaSemana[diaDaSemana] + ", " + dia + " de " + mesesDoAno[mes] + " de " + ano;