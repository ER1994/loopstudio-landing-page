const htmlElement = document.querySelector('html');
const menuBtn = document.getElementById('menuBtn')
const navExtend = document.getElementById('nav-extended')
const exitBtn = document.getElementById('exit-button')

function menuExtendHandler(e) {
    navExtend.classList.toggle('nav-extended_hidden')
    navExtend.classList.toggle('nav-extended')
    htmlElement.classList.toggle('html_blocked')
}

menuBtn.addEventListener('click', e => menuExtendHandler(e))
exitBtn.addEventListener('click', e => menuExtendHandler(e))