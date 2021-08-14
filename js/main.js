const CATALOG_BTN = document.querySelector('.catalogBtn')
const CATALOG = document.querySelector('.hcatalog')

CATALOG_BTN.addEventListener('click', () => {
    CATALOG.classList.toggle('active')
    if(document.body.style.overflow === 'hidden'){
        document.body.style.overflow = null
    }else{
        document.body.style.overflow = 'hidden'
    }
    // CATALOG.style.height = (window.innerHeight - 150) + 'px';
})
document.querySelector('.wrapper').addEventListener('click', () => {
    console.log('wr')
})

const LINK = document.querySelectorAll('.header__link')

for(let i = 0; i < LINK.length; i++){
    let link = LINK[i]
    link.addEventListener('click', () => {
        link.classList.toggle('active')
    })
}


