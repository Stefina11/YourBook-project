import logoImg from '../img/logo.png'; //importiamo un immagine come se fosse un modulo js
import '../css/stile.css';

function logo(){
    const logoDomImage = new Image();
    logoDomImage.src = logoImg; //che contiene l'url
    logoDomImage.className = 'my-logo';
    return logoDomImage
}

export default logo;