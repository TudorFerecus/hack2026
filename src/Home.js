import logo from './logo.svg';
import './Home.css';
import banner from "./home/Logo EESTEC negru cu guidelines.svg";
import panc1 from "./home/panc1.svg";
import panc2 from "./home/panc2.svg";
import panc3 from "./home/panc3.svg";
import bat from "./home/bat.svg";
import elipsa from "./home/Ellipse 2.svg";
import navlogo from "./home/navsvg.svg";
import { useState, useEffect } from "react";

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00"
  });

  useEffect(() => {
    const eventDate = new Date("2026-04-01T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = eventDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0")
      });
    }, 1000);

  return () => clearInterval(interval);
  }, []);
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
        <p class="text2">Automatica si<br/>Calculatoare<br/>UNSTPB</p>
        <p class="text3">fair.eestec.ro</p>

        <p class="timpramas">Timp ramas pana la eveniment:</p>
        <div class="ddhhmm">
        <span>{timeLeft.days}</span>d |
        <span>{timeLeft.hours}</span>h |
        <span>{timeLeft.minutes}</span>m 
        </div>
        <button class="btnaplica" name="aplica" type="submit"><a href="#">APLICA</a></button>
      </section >
      <h1 id="program-banner"></h1>
      <div id="fundal">
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
    </div>
  );
}

export default Home;
