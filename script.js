
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=efc68638dc14fc58a493fbd95e80e54a&units=metric


//selectors
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".ajax-section .cities");

const apikey = "efc68638dc14fc58a493fbd95e80e54a";


//event listeners
form.addEventListener("submit", e => {
    e.preventDefault();
    let inputval =input.value;
    const url = `api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apikey}&units=metric`
} )





//functions