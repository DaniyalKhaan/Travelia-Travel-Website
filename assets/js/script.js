'use strict';
// Preloader 
const preLoader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preLoader.classList.add("remove");
})

// Navbar Toggling for mobile screens

const addEventsOnElements = function (elements, eventType, callBack ) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callBack);
    }
}

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar =  ()  => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventsOnElements(navTogglers, "click" , toggleNavbar);


// Active Header on Scrool

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");

    
});










