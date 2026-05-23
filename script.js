// FAQ Accordion Logic
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        
        // Close other open items
        document.querySelectorAll(".accordion-body").forEach(item => {
            if (item !== body) item.style.display = "none";
        });

        // Toggle current item
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
});

// Contact Form Simple Message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! Paintify team will contact you soon.");
    this.reset();
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlidesManual(slideIndex += n);
}

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function showSlidesManual(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}