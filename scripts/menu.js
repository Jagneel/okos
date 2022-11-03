const menuItems = document.querySelectorAll('details')
const menuItemFigure = document.querySelectorAll('details figure')

for(let i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener('mouseenter', function() {
        menuItems[i].setAttribute('open', true)   
        console.log(menuItemFigure[i])    
    })
    menuItems[i].addEventListener('mouseleave', function() {
        menuItemFigure[i].setAttribute('style', 'animation: sweep-out 0.4s ease-out;')
        setTimeout(function() {
            menuItems[i].removeAttribute('open')
            menuItemFigure[i].removeAttribute('style', 'animation: sweep-out 0.4s ease-out;')
        }, 300)    
    })
}

