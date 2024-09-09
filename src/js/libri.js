import libriImg from '../img/libri.png';
import '../css/stile.css';

function libri(){
    const libriDomImage = new Image();
    libriDomImage.src = libriImg;
    libriDomImage.className = 'my-libri';
    return libriDomImage
}

export default libri;
