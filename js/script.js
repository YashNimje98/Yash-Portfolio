/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

/*==================== scroll reveal ====================*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container,.portfolio-box,.skills .column,.col-right,.reveal, .content-title, .para,.from",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["MERN Stack Developer", "Graphic Design", "Digital Marketing"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


/*=================================== */

document.getElementById('read-more-btn').addEventListener('click', function() {
  var secondParagraph = document.querySelector('.second-paragraph');
  if (secondParagraph.style.display === 'none' || secondParagraph.style.display === '') {
    secondParagraph.style.display = 'block';
    this.textContent = 'Read Less';
  } else {
    secondParagraph.style.display = 'none';
    this.textContent = 'Read More';
  }
});

/*====================================== */

document.getElementById('see-more-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  var hiddenContent = document.querySelector('.hidden-content');

  // Toggle visibility of the hidden content
  if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
    hiddenContent.style.display = 'block';
    this.textContent = 'See Less';
  } else {
    hiddenContent.style.display = 'none';
    this.textContent = 'See More';
  }
});
