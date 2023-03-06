// Hamburger Menu -----------------------------------------------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function hamBurgerClick() { // Funktion tilføjer og fjerne en class som er stylet i css
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}



// Login Modal Box -----------------------------------------------------------------------------------------
var modal = document.getElementById('modal-cont');

function closeModal() { // Fjerner Modal box
  modal.style.display = "none";
}

function openModal() { // Viser Modal box
  modal.style.display = "block";
}

window.onclick = function (event) { // Fjerner Modal box hvis man trykker udenfor boksen
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Login Event
var username = "Kasper"; 
var password = "Nippon";
const loginBtn = document.querySelector('.login-btn');
const createBtn = document.querySelector('.create-user');
const profileBtn = document.querySelector('.profile-btn');
const wrongText = document.querySelector('.modal-log-text');
const submit = document.querySelector(".login-modal");

submit.addEventListener("click", () => { // Click event på submit variablen (login knappen i HTML)
  if(this.document.loginForm.user.value == username && this.document.loginForm.pass.value == password) {
    loginBtn.style.display = "none";
    profileBtn.style.display = "block"
    createBtn.style.display = "none";
    closeModal();
  }
  else {
    wrongText.innerHTML = "Login mislykkedes - Input forkert"
    wrongText.style.color = "#E62D4B"
  }
});

// Åben modal box ved profil punkt hvis man ikke er logget ind
function loadProfile() {
  if(window.getComputedStyle(createBtn).display === "none"){
    window.location.href = "profil.html";
  }
  else{
    openModal()
  }
}





