import VodafoneBanner from './VodafoneBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='ellipse1_alb'></div>
        <div className="ellipse1">
          <span className='Parteneri1'>Parte</span>
        </div>
        <span className='Parteneri2'>neri</span>
        <div className="ellipse2">
        </div>
        <div className="ellipse21">
        </div>
        <div className='ellipse_verde_mare'></div>
        <div className='ellipse_alb_mare'></div>
        <div style={{
          position: 'absolute',
          zIndex: 50,
          top: '250px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%'
        }}>
          <VodafoneBanner
            title="Anuali"
            titleAlignment="right"
            logoCount={3}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
