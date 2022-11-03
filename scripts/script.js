// Home Page 

const homePage = document.querySelector('.home-page')
const homeEat = document.getElementById('eat');
const homeDrink = document.getElementById('drink');
const homeVisit = document.getElementById('visit');


function setHomeImage(){
    homePage.className = 'home-page';
}

function setEatImage(){
    homePage.className = 'home-page-eat';
}

function setDrinkImage(){
    homePage.className = 'home-page-drink';
}

function setVisitImage(){
    homePage.className = 'home-page-visit';
}

// On hover events to change background image
homeEat.addEventListener('mouseenter', setEatImage)
homeEat.addEventListener('mouseleave', setHomeImage)

homeDrink.addEventListener('mouseenter', setDrinkImage)
homeDrink.addEventListener('mouseleave', setHomeImage)

homeVisit.addEventListener('mouseenter', setVisitImage)
homeVisit.addEventListener('mouseleave', setHomeImage)

