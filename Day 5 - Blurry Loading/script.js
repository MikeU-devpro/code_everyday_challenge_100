// window.onload = alert('run')

counter = document.querySelector('.counter')
body = document.querySelector('body')

let percent = 0
let blur = 30
let opacity = 1

let interval = setInterval(update, 30)

function update() {
    counter.innerHTML = percent + '%';
    percent = percent + 1;
    counter.style.opacity = opacity
    opacity = opacity - 0.01
    body.style.backdropFilter = `blur(${blur}px)`
    blur = blur - 0.3

    if (percent > 100) {
        clearInterval(interval)
        counter.style.display = 'none'
    }
}


