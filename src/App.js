import VodafoneBanner from './VodafoneBanner';
import './App.css';
import './Title.css';
import TitluStanga from'./TitluStanga';

function App() {
  const ListaTitluri = [
    {numeTitlu: "Business", nrBrand: 2},
    {numeTitlu: "Starter", nrBrand: 3},
    {numeTitlu: "Academici", nrBrand: 1},
    {numeTitlu: "Logistic", nrBrand: 3},
  ];

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
        <div style={{
          position: 'absolute',
          zIndex: 50,
          top: '450px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%'
        }}>
          <VodafoneBanner
            title="Premium"
            titleAlignment="right"
            logoCount={1}
          />
        </div>
        <div style={{
          position: 'absolute',
          zIndex: 50,
          top: '600px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%'
        }}>
          <VodafoneBanner
            title="Professional"
            titleAlignment="right"
            logoCount={3}
          />
        </div>
      </header>
      <div className='plm'>
       <div className = "Circle2"></div>
        <div className = "Circle1"></div>

        <div>
          {ListaTitluri.map((produs) => (
                <TitluStanga 
                  numeTitlu={produs.numeTitlu} 
                  nrBrand={produs.numeBrand}
                />
            ))}
        </div> 
      </div>
    </div>
  );
}

export default App;
