const menuItems = document.querySelectorAll('details')

for(let i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener('mouseenter', function() {
        menuItems[i].setAttribute('open', true)       
    })
    menuItems[i].addEventListener('mouseleave', function() {
        menuItems[i].removeAttribute('open')
    })
}
