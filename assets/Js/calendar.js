let data = new Date();
let dayNumber = data.getDay();
let YearNumber = data.getFullYear();

let active = document.querySelector(".week li:nth-child("+dayNumber+")");
active.classList.add('current');

let dYear = document.querySelector('.calendar span');
dYear.innerHTML = YearNumber;