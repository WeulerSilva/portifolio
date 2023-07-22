let month = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];


let data = new Date();
let dayNumber = data.getDay();
let yearNumber = data.getFullYear();
let monthYear = month[data.getMonth()];
console.log(monthYear)

let active = document.querySelector(".week li:nth-child("+dayNumber+")");
active.classList.add('current');

let dYear = document.querySelector('.calendar span');
dYear.innerHTML = yearNumber;