import './App.css';
import TitluStanga from'./TitluStanga';

function App() {
  const ListaTitluri = [
    {numeTitlu: "Business", nrBrand: 1},
    {numeTitlu: "Starter", nrBrand: 3}
  ];

  return (
    <div>
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
    
  );
}

export default App;
