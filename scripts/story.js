// Story scroll animation

const hiddenElement = document.querySelectorAll('.show')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled < 133){
        hiddenElement.forEach(el => el.className = 'show')
    } else hiddenElement.forEach(el => el.className = 'hidden')
})

