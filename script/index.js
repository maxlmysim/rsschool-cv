const burger = document.querySelector('.burger')
const hamburger = document.querySelector('.hamburger')
const navMenuList = document.querySelector('.header__nav')

function navMenuToggle () {
    hamburger.classList.toggle('open')
    navMenuList.classList.toggle('open')
}

burger.addEventListener('click', navMenuToggle)
navMenuList.addEventListener('click', function(event) {
    if(event.target.classList.contains('nav__link')) navMenuToggle()
})