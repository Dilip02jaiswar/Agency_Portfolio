
//  Navbar 
let toggleBtn = document.querySelector('.menuBtn');
let ul = document.querySelector('ul');
let contactBtn = document.querySelector('.contact');
toggleBtn.addEventListener('click', () => {
    ul.classList.toggle('active1');
    contactBtn.classList.toggle('active');
    document.getElementById('menuIcon').classList.toggle('fa-bars');
    document.getElementById('menuIcon').classList.toggle('fa-xmark');

});

// Accordion 

const accordions = document.querySelectorAll(".accordionBtn");

accordions.forEach(button => {
  button.addEventListener("click", () => {
    // Toggle active class for panel display
    button.classList.toggle("active");

    // Find the <i> icon inside the button
    const icon = button.querySelector("i");

    // Toggle icon class
    if (icon.classList.contains("fa-circle-chevron-down")) {
      icon.classList.remove("fa-circle-chevron-down");
      icon.classList.add("fa-circle-chevron-up");
    } else {
      icon.classList.remove("fa-circle-chevron-up");
      icon.classList.add("fa-circle-chevron-down");
    }
  });
});

// contact 

function contact(){
    location.href = "#contact"
}

// slider 

const track = document.getElementById('sliderTrack');
const cardWidth = 270; // card width + margin
let index = 0;
const totalCards = track.children.length;

function moveSlide(direction) {
  index += direction;
  if (index < 0) index = totalCards - 1;
  if (index >= totalCards) index = 0;
  track.style.transform = `translateX(-${index * 280}px)`;
}

// Auto Slide every 4 seconds
setInterval(() => moveSlide(1), 1500);
