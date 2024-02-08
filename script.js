const testimonials = document.querySelectorAll("#profile")

let currentIndex = 0;

function displayTestimonial() {
  const testimonial = testimonials[currentIndex];
  const testimonialContainer = document.getElementById("testimonialContainer")
}

function scrollToNextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  const testimonialContainer = document.getElementById("testimonialContainer");
  testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators();
}

displayTestimonial();

let deleteInterVal = setInterval(() => {
  scrollToNextTestimonial();
  
}, 3000); 

const btn = document.querySelectorAll('#btn');
const indicator = document.getElementById('indicator');

function indicators(){
  for(i = 0; i <btn.length; i++){
    btn[i].className = btn[i].className.replace(' active', '');
  }
  btn[currentIndex].className += ' active';
}
