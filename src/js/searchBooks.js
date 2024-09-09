 import axios from 'axios';
 import { createModal, hideModal, showModal, openBookModal, getDescription} from './modal.js';
 import { createSpinner, showSpinner, hideSpinner } from './spinner.js';
 
//  funzione di ricerca libri 
 
 export function searchBooks(searchQuery) {
 const apiUrl = `https://openlibrary.org/subjects/${searchQuery}.json`;

 console.log('searchBooks called with:', searchQuery);

 const booksContainer = document.getElementById('books-container');
    
    booksContainer.innerHTML = ''; // Svuota il contenitore dei libri

    showSpinner(booksContainer);

 axios.get(apiUrl)
    .then(response => {
        const data = response.data;
        const books = data.works || [];
        console.log(books);

        const booksContainer = document.getElementById('books-container');

        booksContainer.innerHTML = '';

        books.forEach(book => {
          const bookCard = createBookCard({
            coverId: book.cover_id,
            title: book.title,
            author: book.authors[0].name,
            key: book.key
          });
          booksContainer.appendChild(bookCard);
          
    });
    hideSpinner();
  })
}


    // funzione di creazione delle card 

    function createBookCard (book){
      
      // creazione struttuta card 

      //creo elemento div per la card
      const card = document.createElement('div');
      card.classList.add('book-card');
      // card.dataset.bookKey = bookKey;
      
      // creo elemento copertina
      const cover = document.createElement('img');
      cover.src = `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`;
      cover.alt = `Copertina di ${book.title}`;
      card.appendChild(cover);

      // Crea un contenitore per il titolo e l'autore
      const titleAuthorContainer = document.createElement('div');
      titleAuthorContainer.classList.add('titleAuthor-container');
      //creo elemento h3 per titolo
      const title = document.createElement('h3');
      title.textContent = book.title;
      titleAuthorContainer.appendChild(title);

      //creo elemento per autore book
      const author = document.createElement('p');
      author.textContent = book.author;
      titleAuthorContainer.appendChild(author);

      card.appendChild(titleAuthorContainer);

      cover.addEventListener('click', () => {
          openBookModal(book);
      })

      return card;
}












    



