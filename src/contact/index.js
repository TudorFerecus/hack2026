import './index.css';
import PersoanaContact from './components/persoana_contact/persoana_contact';

function Contact(){
    return(
        <div className="header">
            <h1 className="header_title">Contact</h1>
            <PersoanaContact />
            <PersoanaContact />
        </div>
    )
}

export default Contact;