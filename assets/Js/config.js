if(languageEng) {
  document.querySelector('.config h1').innerHTML = 'Settings';
  document.querySelector('.config p').innerHTML = 'Change language:';
  document.querySelector('.config button').innerHTML = 'Make change';
}


document.querySelector('.config-lang').addEventListener('click', (e) => {
  e.preventDefault();

  let selectOp = document.querySelector('.config-language').value;

  localStorage.setItem('languageEng', selectOp);

  document.querySelector('.config-lang button').addEventListener('click', changeLang);
});

function changeLang() {
  let languageEng = localStorage.getItem('languageEng') === 'true';
  location.reload();

  console.log(languageEng)
}


