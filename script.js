// script.js

window.addEventListener("scroll",()=>{

const header = document.querySelector("header")

if(window.scrollY > 50){

header.style.background = "rgba(15,15,15,.75)"
header.style.backdropFilter = "blur(12px)"

}else{

header.style.background = "transparent"
header.style.backdropFilter = "blur(0px)"

}

})