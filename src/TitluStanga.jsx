import './App.css';
function TitluStanga(props) {
    const numeTitlu = props.numeTitlu;
    const nrBrand = props.nrBrand;
    


    return(
        <span className="Container">
            <div className='Line'></div>
            
            <span className='Titlu'>{numeTitlu}</span>

        </span>
    )
}
export default TitluStanga