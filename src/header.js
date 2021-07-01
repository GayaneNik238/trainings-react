import logo from './images/findMe.png';
import './header.css';
// import { ImHome3 } from "react-icons/im";
// import {IoMdPeople} from "react-icons/io";
// import { FaSuitcase } from "react-icons/fa";
// import { GoBell } from "react-icons/go";
// import logo from './images/findMe.png'


function Header() {

    return(
        <div  className="logo">
              <a href="https://find-me-5d911.web.app/home" target="_blank"><img src={logo}/></a>
        </div>
      
        // <div className="header">
        //   <div className="middle-container">
        //   <div className="header-left">
        //           <a href="#"><img src={logo} width="125px" height="40px"/></a>
        //           <input placeholder="search"/>
        //     </div>
        //     <div className="header-right">
        //         <div className="header-right-icon">
        //             <ImHome3 style={{fontSize:"25px", color:"dimgray"}} />
        //             <span>Home</span>
        //         </div>
        //         <div className="header-right-icon">
        //             <IoMdPeople style={{fontSize:"25px", color:"dimgray"}}  />
        //             <span>My Clients</span>
        //         </div>
        //         <div className="header-right-icon">
        //             <FaSuitcase style={{fontSize:"25px", color:"dimgray"}}  />
        //             <span>Jobs</span>
        //         </div>
        //         <div className="header-right-icon">
        //             <GoBell  style={{fontSize:"25px", color:"black"}} />
        //             <span>Trainings</span>
        //         </div>
        //     </div>
        //   </div>
        // </div>
    )
}

export default Header;