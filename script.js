
let altaViataActiva = false;

document.getElementById("altaViataBtn").addEventListener("click", function() {

  const titlu = document.getElementById("titlu-catalog");
  const imagine = document.querySelector(".coperta img");
  const body = document.body;
  const linkuri = document.querySelectorAll("nav a");
  const buton = document.getElementById("altaViataBtn");

 
  if (!altaViataActiva) {
    // Schimbăm titlul
    titlu.textContent = "Coperta – Alta viață";
    titlu.style.color = "darkred";
    titlu.style.fontFamily = "Courier New, monospace";

  
    imagine.src = "images/samurai.png"; 
    imagine.style.opacity = "0.8";
    imagine.style.border = "5px solid black";

    body.style.backgroundColor = "#e8e8e8";
    body.style.color = "#222";
    body.style.fontFamily = "Arial, sans-serif";

  
    linkuri.forEach(link => {
      link.style.color = "darkblue";
      link.style.textDecoration = "underline";
    });


    buton.textContent = "Înapoi la copertă";
    buton.style.background = "linear-gradient(135deg, #333, #555)";
    buton.style.color = "white";


    altaViataActiva = true;
  } 

  else {

    titlu.textContent = "Coperta";
    titlu.style.color = "";
    titlu.style.fontFamily = "";

  
    imagine.src = "images/ninja.png";
    imagine.style.border = "";


    body.style.backgroundColor = "";
    body.style.color = "";
    body.style.fontFamily = "";


    linkuri.forEach(link => {
      link.style.color = "";
      link.style.textDecoration = "";
    });


    buton.textContent = "Alta viață";
    buton.style.background = "linear-gradient(135deg, #ff4b2b, #ff416c)";
    buton.style.color = "white";

 
    altaViataActiva = false;
  }
});
function afiseazaVarsta() {
  const anNasterii = parseInt(document.getElementById("an").textContent);
  const anulCurent = new Date().getFullYear();
  const varsta = anulCurent - anNasterii;
  
  document.getElementById("ani").textContent = varsta;
  document.getElementById("varsta").style.display = "block";
}

function ascundeVarsta() {
  document.getElementById("varsta").style.display = "none";
}

function valideazaEmail() {
  const emailInput = document.getElementById("email").value;
  const mesaj = document.getElementById("mesaj-email");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(emailInput)) {
    mesaj.style.color = "green";
    mesaj.textContent = "Adresa de email este validă!";
  } else {
    mesaj.style.color = "red";
    mesaj.textContent = "Te rog introdu o adresă de email validă.";
  }
}

