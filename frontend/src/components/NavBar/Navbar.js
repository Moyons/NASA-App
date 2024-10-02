import "../../styles/App.css";
import logo from '../../images/nasa.png';

function Navbar() {
    return(
        <div className="navbar-right">
            <img src={logo} alt=""/>
        </div>
    );
}

export default Navbar;