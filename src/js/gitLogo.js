import gitLogoImg from '../img/gitlogo.png'; //importiamo un immagine come se fosse un modulo js
import '../css/stile.css';

function gitLogo(){
    const gitLogoDomImage = new Image();
    gitLogoDomImage.src = gitLogoImg; //che contiene l'url
    gitLogoDomImage.className = 'my-gitlogo';
    return gitLogoDomImage
}

export default gitLogo;