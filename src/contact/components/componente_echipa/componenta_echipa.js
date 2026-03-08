import './componente_echipa.css';
import Arrow from '../../images/Arrow 6.svg'; // Adjust the path to your image file
import Sergiu from '../../images/tz1AUTt - Imgur 8.svg';

function ComponentaEchipa() {
    return (
        <div className="ComponentaEchipa">
        <div className="Echipa">
            <h1>Echipa</h1>
        </div>
            <div className="Sergiu">
            <img src={Sergiu} alt="Sergiu"/>
            </div>
            <div className="Arrow1">
                <img src={Arrow} alt="Arrow" />
            </div>
            <div className="Coordonator"><h2>Coordonator</h2></div>
            <div className="Sergiu1"><h1>Sergiu Adrian Preda</h1></div>
      </div>
    );
}

export default ComponentaEchipa;