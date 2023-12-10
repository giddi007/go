function filterCards(category) {
  const cards = document.querySelectorAll(".gallery");
  cards.forEach((card) => {
    const cardCategories = card.classList;
    console.log(cardCategories)
    if (category === "fe" || cardCategories.contains(category)) {
      card.style.display = "flex";
      card.classList.remove('fade-out');

    } else {
      card.style.display = "none";
      card.classList.add('fade-out');
    }
  });
}

window.addEventListener("scroll", () => {
    var btn = document.querySelector(".stuff")
    if (window.scrollY > 100) {
        btn.style.display = "flex";
    }else{
        btn.style.display = "none";
    }
})

var hamBtn = document.querySelector(".fa-bars")
var hamMenu = document.querySelector(".menu")
var hamRemove = document.querySelector(".fa-xmark")
var load = document.querySelector(".overlay")

hamBtn.addEventListener("click", () => {
    hamMenu.classList.add("active")
})
hamRemove.addEventListener("click", () => {
    hamMenu.classList.remove("active")
})

var overlay = document.querySelector(".overlay")
window.addEventListener("load", () => {
   overlay.style.display = "none";
})

var btnChange = document.querySelector(".nav-btn");
var indicator = document.querySelector(".indicator");
var links =  document.querySelectorAll(".links");
var navigationBar =  document.querySelector("nav");
var head =  document.querySelector(".head");
var homeSec = document.querySelector(".home")
var aboutSec =  document.querySelector(".about-me");
var serveSec =  document.querySelector(".services");
var portSec =  document.querySelector(".portfolio");
var lastSec =  document.querySelector(".last");
var stat =  document.querySelector("stats");
var stuff = document.querySelector("#stuff")


btnChange.addEventListener("click", () => {
    btnChange.classList.toggle("active")

    //handling darkmode
    if(btnChange.classList.contains("active")) {
        btnChange.style.backgroundColor = "#b5b5a9"
        indicator.style.backgroundColor = "#b5b5a9";
        homeSec.style.backgroundColor = "#9c6644";
        navigationBar.style.backgroundColor = "#9c6644";
        aboutSec.style.backgroundColor = "#b08968";
        serveSec.style.backgroundColor = "#e6ccb2";
        portSec.style.backgroundColor = "#b08968";
        lastSec.style.backgroundColor = "#e6ccb2";
        document.i.style.Color = "#ebccb2";
        stuff.style.backgroundColor = "#e88c7d"
       
    }        

    //handling lightmode
    else {
      btnChange.style.backgroundColor = "#B08968"
      indicator.style.backgroundColor = "#9c6644";
      homeSec.style.backgroundColor = "#b5b5a9";
      navigationBar.style.backgroundColor = "#a3a398";
      aboutSec.style.backgroundColor = "#c9c9bc";
      serveSec.style.backgroundColor = "#fbfbeb"
      portSec.style.backgroundColor = "#c9c9bc";
      lastSec.style.backgroundColor = "#fbfbeb"
      lastSec.i.style.backgroundColor = ""
    
  }
})
