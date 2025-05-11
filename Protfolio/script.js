const hamburger = document.querySelector('.hamburger');

const header = document.querySelector(".header")

const mobileMenu = document.querySelector('.nav-list ul');

const menuItem =document.querySelectorAll(".nav-list ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
     mobileMenu.classList.toggle("active");
});

menuItem.forEach((item) => {
item.addEventListener("click", () => {
  hamburger.classList.toggle("active");
     mobileMenu.classList.toggle("active");
});
});

document.addEventListener("scroll", ()=> {
  var scroll_position=window.scrollY;
  if(scroll_position>250){
    header.style_position.backgroundColor = "#29323c";
  } 
  else{
    header.style_position.backgroundColor ="transparent";
  }
});