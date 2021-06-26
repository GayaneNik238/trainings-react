import './inputSection.css';
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { BsFillBellFill } from "react-icons/bs";
import { CgGirl } from "react-icons/cg";


function InputSection() {
    return(
        <div className="input-container">
            <input className="input" placeholder="Search"/>
            <div className="icons">
                <span>
                    Annette B.
                </span>
                <CgGirl className="react-icon"/>
                <HiDotsCircleHorizontal className="react-icon" />
                <BsFillBellFill className="react-icon"/>
            </div>
        </div>
        
    )

}
export default InputSection;