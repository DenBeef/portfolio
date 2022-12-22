
// Add animation to skills icons
function mouseOver(elem) {
    var e = elem.id;
    if (e == "css-icon" || e == "html-icon" || e == "js-icon" || e == "ps-icon" || e == "py-icon" || e == "git-icon") {
        document.querySelector("#" + CSS.escape(e)).classList.add("animate__animated", "animate__tada");
        setTimeout(() => {  
            document.querySelector('#' + CSS.escape(e)).classList.remove("animate__animated", "animate__tada")
        }, 1000);   
    } 
  }


// Scroll to the top of the page
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

