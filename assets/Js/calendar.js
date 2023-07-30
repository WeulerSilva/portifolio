let month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dayName = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
let dayNameEng = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function creatLi(dayEng) {
  const weekUl = document.querySelector('.week');

  dayEng.forEach((dayAbrevation) => {
    const liElements = document.createElement('li');
    liElements.textContent = dayAbrevation;

    liElements.classList.add(dayAbrevation);

    weekUl.appendChild(liElements);

  });
}


let data = new Date();
let dayNumber = data.getDay();
let yearNumber = data.getFullYear();
let monthYear;

if (languageEng) {
  document.querySelector('.calendar h1').innerHTML = 'Calendar';
  document.querySelector('.calendar-prev').innerHTML = 'Prev';
  document.querySelector('.calendar-next').innerHTML = 'Next';
  monthYear = monthEng[data.getMonth()];

  creatLi(dayNameEng);
} else {
  monthYear = month[data.getMonth()];
  creatLi(dayName);
}

let numberMonth = data.getDate();

if (dayNumber === 0) {

  if (languageEng) {
    document.querySelector('.Sun').classList.replace('Sun', 'current');
  } else {
    document.querySelector('.dom').classList.replace('dom', 'current');
  }

} else {
  let active = document.querySelector(".week li:nth-child(" + dayNumber + ")");
  active.classList.add('current');
}



let dYear = document.querySelector('.calendar span');
let dDay = document.querySelector('.calendar-day');
let dMonth = document.querySelector('.calendar h3');

function currentData() {
  dYear.innerHTML = yearNumber;
  dDay.innerHTML = numberMonth;
  dMonth.innerHTML = monthYear;
}

function atualizarDiaAtual() {
  const currentElements = document.querySelectorAll('.current');
  currentElements.forEach((element) => {
    element.classList.remove('current');
  });

  let todayName = dayName[data.getDay()];

  let index = dayName.indexOf(todayName);

  if (index === 0) {
    index = 7;
  }

  const active = document.querySelector(`.week li:nth-child(${index})`);
  active.classList.add('current');
}

function changeData(days) {
  data.setDate(data.getDate() + days);
  dayNumber = data.getDay();
  yearNumber = data.getFullYear();

  if (languageEng) {
    monthYear = monthEng[data.getMonth()];
  } else {
    monthYear = month[data.getMonth()];
  }



  numberMonth = data.getDate();

  atualizarDiaAtual();
  currentData();


}

currentData();

document.querySelector('.calendar-next').addEventListener('click', () => {
  changeData(1);
})

document.querySelector('.calendar-prev').addEventListener('click', () => {
  changeData(-1);
})