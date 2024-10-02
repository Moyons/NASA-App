import "../../styles/App.css";
import logo from '../../images/nasa.png';

function Navbar() {
    return(
        <div className="navbar-right">
            <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="NASA logo" />
            </a>
        </div>
    );
}

export default Navbar;