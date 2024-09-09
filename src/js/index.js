import '../css/stile.css';
import axios from "axios";
import { searchBooks } from './searchBooks.js';

// //_______________immagini________________//
//logo
import logoFn from './logo.js';

const urlLogo = "index.html";
const logoContainer = document.getElementById('logo-container');
const linkLogo = document.createElement ('a');
linkLogo.href = urlLogo;

const logoElement = logoFn();
logoElement.classList.add('logo');
linkLogo.appendChild(logoElement);
logoContainer.appendChild(linkLogo);

//libri
import libriFn from './libri.js';
const libriContainer = document.getElementById('libri-container');
const libriElement = libriFn();
libriElement.classList.add('libri');
libriContainer.appendChild(libriElement);

//gitlogo
import gitLogoFn from './gitLogo.js';

const urlGit = "https://github.com/Stefina11";
const footerContainer = document.getElementById('footer');
const linkLogoGit = document.createElement('a');
linkLogoGit.href = urlGit;
linkLogoGit.target = '_blank'; //per aprire link in nuova pagina

const gitLogoElement = gitLogoFn();
gitLogoElement.classList.add('gitLogo');
linkLogoGit.appendChild(gitLogoElement); //appendo l'immagine al link
footerContainer.appendChild(linkLogoGit); // quindi appendo il link (con immagine compresa)

  
//_______________elementi dell'html________________//

const searchBar = document.getElementById("bar");
const searchButton = document.getElementById("button");
const booksContainer = document.getElementById("books-container");
const errorMessage = document.getElementById("errorMessage");
const searchSection = document.getElementById("searchSection");

// //_______________ricerca libri ________________//
let searchQuery;

// acquisizione input searchBar tramite input+invio e input+button e avvio della ricerca

searchBar.addEventListener("keyup", function(event) {
  searchQuery = searchBar.value.trim();
  if (event.key === "Enter") {
    if (searchQuery) {
      console.log(searchQuery);
      searchBooks(searchQuery);
    } else {
      alert("Per favore, inserisci una categoria.");
    }
  }
});


searchButton.addEventListener('click', function() {
  const searchQuery = searchBar.value.trim();

  if (searchQuery) {
      searchBooks(searchQuery);
  } else {
    alert ("Per favore, inserisci una categoria.");
  }
});









