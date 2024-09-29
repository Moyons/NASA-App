import "../../App.css";
import logo from '../../images/nasa.png';

function Navbar(props) {

    return(
        <div className="navbar">
            <div className="navbar-left">
                Text
            </div>
            <div className="navbar-right">
                <img src={logo} alt=""/>
            </div>
        </div>
    );
}

export default Navbar;