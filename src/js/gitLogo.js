import gitLogoImg from '../img/gitlogo.png'; 
import '../css/stile.css';

function gitLogo(){
    const gitLogoDomImage = new Image();
    gitLogoDomImage.src = gitLogoImg; 
    gitLogoDomImage.className = 'my-gitlogo';
    return gitLogoDomImage
}

export default gitLogo;