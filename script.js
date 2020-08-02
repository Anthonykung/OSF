/* Made with <3 by Anthony Kung */

var i = 0;

function osf() {
  var slides = document.getElementsByClassName("slide");
  if (i == slides.length - 1) {
    slides[i].classList.remove("slide-active");
    slides[0].classList.add("slide-active");
    i = 0;
  }
  else {
    slides[i].classList.remove("slide-active");
    slides[i + 1].classList.add("slide-active");
    i++;
  }
  setTimeout(osf, 2000);
}

window.addEventListener("load", osf);