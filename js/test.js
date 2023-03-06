// Define a function to run the slide show
function runSlideShow() {
  // Check if screen width is narrower than 425 pixels
  if (window.matchMedia("(max-width: 425px)").matches) {

    // Define slideIndex and start the slide show
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    // Automatic slide show
    setInterval(function() {
      plusSlides(1);
    }, 5000); // Change the slide every 5 seconds

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("meals-wrapper");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" focus", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " focus";
    }
  }
}

// Run the slide show when the page loads
runSlideShow();

// Add an event listener to run the slide show when the screen width changes
window.addEventListener('resize', runSlideShow);
