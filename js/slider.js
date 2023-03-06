
// Opskrift karrusel -----------------------------------------------------------------------------------------
let slideIndex = 1; // Her gives variablen slideIndex en værdi på 1 (indikerer at slide 1 skal vises som første slide)
showSlides(slideIndex); // Her kaldes funktion showSlides for at vise første slide

// Frem og Tilbage controls
function plusSlides(n) { // Bruges til at gå frem og tilbage mellem et antal slides (antallet af slides er specificeret af n)
  showSlides(slideIndex += n); // Her kaldes funtion showSlides med en opdateret værdi af slideIndex for at vise det næste slide (slideIndex lægges sammen med værdien af n)
}

// Nuværende Opskrift 
function currentSlide(n) { // Denne funktion bruges til at vise et specifikt slide, angivet gennem parameteren n
  showSlides(slideIndex = n); // Her kaldes funktionen showSlides med en opdateret værdi af slideIndex (her er værdien af slideIndex lig med n)
}

function showSlides(n) { // n repræsenterer index af opskriften som vises
  let i; // Variabel med navn i
  let slides = document.getElementsByClassName("meals-wrapper"); // Deklaration på variabel som er tildelt et element i DOM ved hjælp af et class name
  let dots = document.getElementsByClassName("dot"); //  Deklaration på variabel som er tildelt et element i DOM ved hjælp af et class name
  if (n > slides.length) {slideIndex = 1} // Hvis n er større end mængden af opskrift slides så vises opskrift 1 (starter forfra)
  if (n < 1) {slideIndex = slides.length} // Hvis n er mindre 1 vises sidste opskrift slide (Man kan derfor gå tilbage i rækkefølgen)
  for (i = 0; i < slides.length; i++) { // For loop som giver index en stigning på 1 hvis index er mindre mængden af slides
    slides[i].style.display = "none"; // Gemmer opskrift slides ved at sætte display = none
  }
  for (i = 0; i < dots.length; i++) { // Samme loop som ovenstående (bare med dots i stedet for slides)
    dots[i].className = dots[i].className.replace(" focus", ""); // Fjerner klassen 'focus' på alle navigationsprikker
  }
  slides[slideIndex - 1].style.display = "block"; // Her sættes display = block på den aktive opskrift slide, hermed vises det givne slide
  dots[slideIndex - 1].className += " focus"; // Her tilføjes klassen 'focus' (som er stylet i css), hvilket gør prikken tilsvarende til det aktive slide rød
}
