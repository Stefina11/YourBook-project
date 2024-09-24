import logoImg from '../img/logo.png'; 
import '../css/stile.css';

function logo(){
    const logoDomImage = new Image();
    logoDomImage.src = logoImg; 
    logoDomImage.className = 'my-logo';
    return logoDomImage
}

export default logo;