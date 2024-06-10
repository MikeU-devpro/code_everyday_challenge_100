const images = document.querySelectorAll("img")
const headings = document.querySelectorAll("h3")

console.log(images);

console.log(headings);

images.forEach(image => {
    image.addEventListener("click", (e) => {
        images.forEach(image => {
            image.classList.remove('selected')
        })
        headings.forEach(heading =>{
            heading.style.opacity = "0"
        })
        e.target.classList.add('selected')
        e.target.nextElementSibling.style.opacity = "1";
        
      });
})
    
