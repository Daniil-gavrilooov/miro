let burgerMenuBtn = document.querySelector('.header__burger-btn')

burgerMenuBtn.addEventListener(onclick = function (){
    let burgerMenu = document.querySelector('.header__burger-menu')
    let headerTop = document.querySelector('.header__top')
    let body = document.querySelector('.body')

    burgerMenuBtn.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
    body.classList.toggle('body-active')
    headerTop.classList.toggle('header__top--active')
})