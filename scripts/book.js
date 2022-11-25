// Set date to todays date in form
const dateForm = document.getElementById('date');
const hourOption = document.getElementById('hour');
const minuteOption = document.getElementById('minute');
const fname = document.getElementById('fname');
const phone = document.getElementById('phone');
const people = document.getElementById('num-people');
const book = document.getElementById('book-table');


let date = new Date();

let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); 
let yyyy = date.getFullYear();

let newDate = `${yyyy}-${mm}-${dd}`

dateForm.value = newDate



const getDate = e => console.log(dateForm.value)

// Fill Time select field
function createOption(value, text){
    let option = document.createElement('option');
    option.text = text;
    option.value = value;
    return option
}

for(let i = 12; i <= 23; i++){
    hourOption.appendChild(createOption(i,i))
}

const timeOption = document.querySelectorAll('option')

for(let i = 0; i < 60; i += 15) {
    minuteOption.appendChild(createOption(i,i))      
}

function showModal(){
    // Get the modal
    const modal = document.getElementById("myModal");
    const modalC = document.getElementById("modalC");
    
    // Get the button that opens the modal
    const btn = document.getElementById("book-table");
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
      modalC.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


book.addEventListener('click', function(){
        showModal()
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
