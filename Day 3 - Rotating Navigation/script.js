const menu = document.querySelectorAll('.menu')
const container = document.querySelector('.container')
const circle = document.querySelector('.circle')
const info = document.querySelector('.info')

menu.forEach( menu => {
    menu.addEventListener('click', () => {
        circle.classList.toggle('active')
        container.classList.toggle('active')
        info.classList.toggle('active')
    })
})