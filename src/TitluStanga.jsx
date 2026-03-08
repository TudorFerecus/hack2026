import './Title.css';
import VfLogo from './VF_Logo_Strapline_RGB_RED.svg';

function TitluStanga(props) {
    const numeTitlu = props.numeTitlu;
    const nrBrand = props.nrBrand;
    
    const brandIcons = Array.from({ length: nrBrand });


    return(
        <span className="Container">
            <div className='Line'></div>

            <span className='Titlu'>
                {numeTitlu}
               {/* <div className="LogoWrapper">
                    {brandIcons.map((_, index) => (
                        <div key={index} className='LogoVf'>
                            <img src={VfLogo} alt="Logo" />
                        </div>
                    ))}
                </div> */}
                <div className='LogoWrapper'>
                    <img src={VfLogo} alt="Logo" />
                </div>
            </span>

            
        </span>
    )
}
export default TitluStanga