import axios from 'axios';

export function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.style.cursor = 'pointer';
    closeButton.textContent = 'x';

    closeButton.addEventListener('click', () => {
        hideModal(modal);
    });

    const descriptionElement = document.createElement('p');
    descriptionElement.id = 'description';

    modal.appendChild(closeButton);
    modal.appendChild(descriptionElement);

    document.body.appendChild(modal);

    return modal;
}

export function showModal(modal) {
    modal.style.display = 'block';
}

export function hideModal(modal) {
    modal.style.display = 'none';
}


export function openBookModal(book) {

    getDescription(book)
        .then((description) => {

            const modal = createModal();
            const descriptionElement = modal.querySelector('#description');

            if (typeof description === "object") {
                Object.keys(description).forEach((elem) => {
                    descriptionElement.textContent = description[elem];
                });

            } else if (typeof description === "undefined") {
                descriptionElement.textContent = "No description available";

            } else {
                descriptionElement.textContent = description;
            }

            showModal(modal);
        })
        .catch((error) => {
            console.error('Errore durante il recupero della descrizione:', error);
        });
}



export function getDescription(book) {

    const bookKey = book.key;
    const apiUrlDescr = `https://openlibrary.org${bookKey}.json`;

    return axios.get(apiUrlDescr)
        .then((response) => response.data.description)

}