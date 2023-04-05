// sticky nav
var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 250) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
})

// typed.js
const typing = new Typed(".passion", {
    strings: ["Front-End Web Developer", "UIUX Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
})