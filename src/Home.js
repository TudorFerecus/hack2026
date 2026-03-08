import logo from './logo.svg';
import './Home.css';
import banner from "./home/Logo EESTEC negru cu guidelines.svg";
import panc1 from "./home/panc1.svg";
import panc2 from "./home/panc2.svg";
import panc3 from "./home/panc3.svg";
import bat from "./home/bat.svg";
import elipsa from "./home/Ellipse 2.svg";
import navlogo from "./home/navsvg.svg";

function Home() {
  return (
    <div className="App">
      <section>
        <img src={banner} id="banner" />
        <navbar>
            <button type=""><img src={navlogo} id="navlogo" /></button>
        </navbar>
      </section>
      <section id="principal">
        <div id="containerSemn">
          <img src={panc1} class="panc1" />
          <img src={panc2} class="panc2" />
          <img src={panc3} class="panc3" />
          <img src={bat} class="batpoza" />
        </div>
        <img id="maxlim" src={elipsa} class="elipsa" />
        <p class="text1">25-26 Martie</p>
        <p class="text2">Automatica si Calculatoare<br/>UNSTPB</p>
        <p class="text3">fair.eestec.ro</p>

        <p>Timp ramas pana la eveniment:</p>
        <span id="days">00</span>d |
        <span id="hours">00</span>h |
        <span id="minutes">00</span>m
        <button id="aplica" name="aplica" type=""><a href="#">APLICA</a></button>
      </section>
      <h1 id="program-banner"></h1>
      <section>
        <h2>Marti, 25 martie</h2>
        <p>10:00<br/>Deschidere</p>
        <p>10:00<br/>Conferinta</p>
        <p>10:00<br/>TBA</p>
        <p>10:00<br/>TBA</p>
      </section>
      <section>
        <h2>Miercuri, 26 martie</h2>
        <p>10:00<br/>Deschidere</p>
        <p>10:00<br/>Conferinta</p>
        <p>10:00<br/>TBA</p>
        <p>10:00<br/>TBA</p>
      </section>
    </div>
  );
}

export default Home;
