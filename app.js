// Type writting effect

const texts = ["Developer. ", "Programmer. ", "Techie. "];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 400);
})();

// navbar hamburger effect

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle('open');
    links.forEach((link) => {
        link.classList.toggle("fade");
      });
});

// text float appear effect
function scrollAppear() {
  var introText = document.querySelector('.intro-text');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(introPosition < screenPosition) {
    introText.classList.add('intro-text-appear');
  }
}

window.addEventListener('scroll', scrollAppear);