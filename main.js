const button1 = document.querySelectorAll('.button1')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('#modal__content--close') 

for (let index = 0; index < button1.length; index++) {
    const element = button1[index];
    element.addEventListener("click", () => {
        modal.classList.remove('hidden')
        modal.classList.add('visible')
    })
    
    closeButton.addEventListener("click", () => {
        modal.classList.remove('visible')
        modal.classList.add('hidden')
    })
    
}

/* button1.addEventListener("click", () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

closeButton.addEventListener("click", () => {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
}) */