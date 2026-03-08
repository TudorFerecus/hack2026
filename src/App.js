
import './App.css';
import Contact from './contact';
import ellipse from './contact/images/ellipse.svg';
import ComponentaEchipa from './contact/components/componente_echipa/componenta_echipa';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <img src={ellipse} className="ellipse"></img>
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

          <button type="submit" class="submit_button">TRIMITE</button>
          </form>
      </div>

      <div class="title">
          <h1>Echipa</h1>
      </div>

      <div className="container_echipa">
            <ComponentaEchipa />
      </div>
    </div>
  );
}

export default App;
