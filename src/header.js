import logo from './images/findMe.png';
import './App.css'

function Header() {

    return(
        <div className="logoName">
            <a href="#"><img src={logo} width="100" /></a>
        </div>
    )
}

export default Header;