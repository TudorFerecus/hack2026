import './About.css';
import arrow1 from './assets/arrow1.svg';
import meeting from './assets/meeting.svg';
import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';
import icon3 from './assets/icon3.svg';
import interview from './assets/interview.svg';
import purple_ellipse from './assets/purple-ellipse.svg';

import localMapImage from './assets/undraw_connected-world_anke 1.svg'; 
import editIcon from './assets/Frame 7.svg';
import phoneIcon from './assets/Frame 8.svg';
import Vector from './assets/Vector.svg';
import Arrow from './assets/Arrow 2.svg';

import tears from './assets/Group 44.svg';



class Question {
  constructor(id, text, answer) {
    this.id = id;
    this.text = text;
    this.answer = answer;
  }
}

const About = () => {
  const faqData = [
    new Question(
      '01', 
      'Intrebarea numarul unu?', 
      'Lorem ipsum dolor sit amet consectetur. In orci feugiat quis leo habitant elit viverra.'
    ),
    new Question(
      '02', 
      'Intrebarea numarul doi?', 
      'Lorem ipsum dolor sit amet consectetur. In orci feugiat quis leo habitant elit viverra.'
    ),
    new Question(
      '03', 
      'Intrebarea numarul trei?', 
      'Lorem ipsum dolor sit amet consectetur. In orci feugiat quis leo habitant elit viverra.'
    )
  ];

  return (
    <div className="About">
        <div className="background-white">
            <img src={purple_ellipse}></img>
        </div>
        
        <div className="background-purple">
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

                <div className="networking-text">
                    Networking
                </div>

                <div className="networking-subtext">
                    Lorem ipsum dolor sit amet consectetur. 
                    Libero duis feugiat tellus nam augue.
                </div>
            </div>
        </div>

        <div className="about-container">
            <div className="header-actions">
            <img src={editIcon} alt="Edit" className="header-icon" />
            <img src={phoneIcon} alt="Phone" className="header-icon" />
            </div>
    
            <img src={localMapImage} alt="Map" className="local-map-image"
            />

            <img src={tears} alt="Tear" className="tears"/>

            <div className='faq-bubble-container'>
                <img src={Vector} alt="bubble" className="bubble-background" />
                <div className="faq-text">FAQ
                    <img src={Arrow} alt="arrow" className="arrow-icon" />  
                </div>   
            </div>
            <div className="faq-list">
            {faqData.map((item) => (
                <div key={item.id} className="faq-item">
                <div className="faq-header">
                    <span className="faq-number">{item.id}</span>
                    <h2 className="faq-question">{item.text}</h2>
                </div>
                <p className="faq-answer">{item.answer}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
}

export default About;