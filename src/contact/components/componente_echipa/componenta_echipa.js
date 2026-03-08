import './componente_echipa.css';
import Arrow from '../../images/Arrow 6.svg'; // Adjust the path to your image file
import Sergiu from '../../images/tz1AUTt - Imgur 8.svg';

function ComponentaEchipa() {
    return (
        <div className="ComponentaEchipa">
            <div className="Arrow1">
                <img src={Arrow} alt="Arrow" />
            </div>
            <div className="Sergiu">
            <img src={Sergiu} alt="Sergiu"/>
            </div>
            <div className="Sergiu1">Sergiu Adrian Preda</div>
            <div className="Coordonator">Coordonator</div>
      </div>
    );
}

export default ComponentaEchipa;