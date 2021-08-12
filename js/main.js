const CATALOG_BTN = document.querySelector('.catalogBtn')
const CATALOG = document.querySelector('.hcatalog')

CATALOG_BTN.addEventListener('click', () => {
    CATALOG.classList.toggle('active')
})

const ICON = document.querySelectorAll('.headerIcon')
const LINK = document.querySelectorAll('.header__link')

for (let i in ICON){
    let icon = ICON[i]
    let link = LINK[i]
    link.addEventListener('click', () => {
        icon.classList.toggle('active')
    })
}