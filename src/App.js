
import './App.css';
import Contact from './contact';
import ellipse from './contact/images/ellipse.svg';
import ComponentaEchipa from './contact/components/componente_echipa/componenta_echipa';
<<<<<<< HEAD
=======
import blob from './contact/images/Vector.svg';
>>>>>>> bed90b248b8e77d9281e948c2f88279c3a8006a0

function App() {
  return (
    <div className="App">
      <div className="bg">
        <img src={ellipse} className="ellipse"></img>
        <img src={blob} className="blob1"></img>
        <img src={blob} className="blob2"></img>
      </div>

      <div className="header">
        <Contact />
      </div>

      <div className="container_form">
        <form>
          <div className="container_field first_field">
            <label>Nume si prenume:</label>
            <input type="text" placeholder="nu mai vreau sa fiu viu"></input> 
          </div>

          <div className="container_field">
            <label>Adresa de email:</label>
            <input type="email" placeholder="nu mai vreau sa fiu viu"></input>
          </div>

          <div className="container_field">
            <label>Mesajul tau:</label>
            <textarea placeholder="nu mai vreau sa fiu viu" rows="4"></textarea>
          </div>

          <button type="submit" className="submit_button">TRIMITE</button>
          </form>
      </div>

      <div className="title">
          <h1>Echipa</h1>
      </div>

      <div className="container_echipa">
            <ComponentaEchipa />
<<<<<<< HEAD
=======
            <ComponentaEchipa />
            <ComponentaEchipa />
>>>>>>> bed90b248b8e77d9281e948c2f88279c3a8006a0
      </div>

    </div>
  );
}

export default App;
