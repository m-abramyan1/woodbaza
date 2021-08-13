const CATALOG_BTN = document.querySelector('.catalogBtn')
const CATALOG = document.querySelector('.hcatalog')

CATALOG_BTN.addEventListener('click', () => {
    CATALOG.classList.toggle('active')
    // CATALOG.style.height = (window.innerHeight - 150) + 'px';
})

const LINK = document.querySelectorAll('.header__link')

for(let i in LINK){
    LINK[i].addEventListener('click', () => {
        // if(link.classList.contains('active'))
        LINK[i].classList.toggle('active')
    })
}


