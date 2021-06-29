import adLogo from './images/synopsys.jpg';
import { ImLocation2 } from "react-icons/im";
import { BsClockHistory } from "react-icons/bs";
import './AdJob.css'


function AdJob() {
    return (
      <div className="adJobWrapper">
            <span style={{color:"dimgray", margin:"5px", fontSize:"15px"}}>Jobs recommended for you</span>
            <hr style={{margin:"10px"}}></hr>
       
            <div className="adJob">
                <img src={adLogo} height="110xp" width="110px"/>
                <div className="adJobDesc">
                    <span>CAD Engineer</span>
                    <span><ImLocation2 /> Yerevan</span>
                    <span><BsClockHistory /> 20020</span>
                </div>
            </div>
       
      </div>

    )

}

export default AdJob;