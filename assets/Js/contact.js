const contactOpen = document.querySelector('.contact-open');
const myContact = document.querySelectorAll('.my-contact');
const contactOpenC = document.querySelector('.contact-open-center');
const contactOpenH = document.querySelector('.contact-open-center h3');
const contactOpenLinks = document.querySelector('.contact-open-links');


if(languageEng) {
    document.querySelector('.contact-number h1').innerHTML = 'Contacts';
    document.querySelector('.resume').innerHTML = 'Résumé';
    document.querySelector('.contact-footer h6').innerHTML = 'My contacts';
}

myContact.forEach((item) => {
    item.addEventListener('click', () => {
        openContacts(item);
    });
})

 function openContacts (item) {
    contactOpen.classList.replace('none', 'flex');
    contactOpen.style.height = '200px';

    let getA = item.getAttribute('data-contact');
    let getS = item.getAttribute('data-li');


    contactOpenH.innerHTML = '';
    contactOpenH.innerHTML = item.getAttribute('data-contact');

    if(getA === 'Email' || getA === 'Linkedin' || getA === 'GitHub') {
        contactOpenLinks.innerHTML = '';
        contactOpenC.classList.replace('none', 'flex');
        makeDivs(getS);
    }else if(getA === 'Curriculo') {
        if(languageEng) {
            document.querySelector('.contact-open-center h3').innerHTML = 'Résumé';
        }
        contactOpenLinks.innerHTML = '';
        contactOpenC.classList.replace('none', 'flex');
        
        let makeDiv = document.createElement('div');
        makeDiv.classList.add('contact-open-copie');

        makeDiv.addEventListener('click', () => {
            downloadPdf()
        })

        contactOpenLinks.appendChild(makeDiv);

        return contactOpenLinks
    }


 }



 function makeDivs(id) {
    let makeDiv = document.createElement('div');
    makeDiv.classList.add('contact-open-copie');
    makeDiv.setAttribute('data-id', id)

    makeDiv.addEventListener('click', () => {
        copieText(id)
    })

    let makeDi = document.createElement('div');
    makeDi.classList.add('contact-open-go');
    makeDi.addEventListener('click', () => {
        window.location.href = id;
    })

    contactOpenLinks.appendChild(makeDi);
    contactOpenLinks.appendChild(makeDiv);

    return contactOpenLinks
 }

 function downloadPdf() {
    var link = document.createElement('a');

    link.download = 'curiculo.pdf';

    link.href = 'assets/Media/cw/curiculo(falso).pdf';

    link.click();
}

function copieText(idElement) {
    let texto = idElement

    navigator.clipboard.writeText(texto)
        .then(function() {
            if(languageEng) {
                alert("copied text: " + texto);
            }else {
                alert("Texto copiado: " + texto);
            }
            
        })
        .catch(function(error) {
            if(languageEng) {
                console.error("Error copying text: ", error);
            }else {
                console.error("Erro ao copiar texto: ", error);
            }
        });
}

document.querySelector('.contact-footer-photo').addEventListener('click', () => {
    setTimeout(() => {
        contactOpenC.classList.replace('flex', 'none');
        contactOpenLinks.innerHTML = '';
    },100)
    contactOpen.style.height = '0';
})