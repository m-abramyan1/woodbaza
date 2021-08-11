const CATALOG_BTN = document.querySelector('.catalogBtn')
const CATALOG = document.querySelector('.hcatalog')

CATALOG_BTN.addEventListener('click', () => {
    CATALOG.classList.toggle('active')
})

