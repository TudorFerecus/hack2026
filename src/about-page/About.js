import './About.css';
import arrow1 from './assets/arrow1.svg';
import meeting from './assets/meeting.svg';
import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';
import icon3 from './assets/icon3.svg';
import interview from './assets/interview.svg';

function About() {
  return (
    <div className="About">
        <div className="background">
            <div className="parent-container">
                <div className="title-text">Despre</div>
                <div className="arrow1">
                    <img src={arrow1}></img>
                </div>

                <div className="meeting-img-container">
                    <img src={meeting}></img>
                </div>

                <div className="about-text-container">
                    Lorem ipsum dolor sit amet consectetur. Nam sollicitudin 
                    sit pharetra commodo imperdiet scelerisque diam convallis. 
                    Mauris sit ac ut ultrices adipiscing fames placerat. 
                    Nibh sit commodo nulla praesent id imperdiet amet vel proin. 
                    Molestie et elit rutrum ut viverra nisi.
                </div>

                <div className="buttons-container">
                    <img src={icon1} className="small-icon"></img>
                    <img src={icon2} className="small-icon"></img>
                    <img src={icon3} className="small-icon"></img>
                    <img src={interview} className="interview-img"></img>
                </div>
                
                
            </div>
        </div>
    </div>
  );
}

export default About;