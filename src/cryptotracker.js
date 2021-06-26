import './App.css';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function Cryptotracker() {
    let randomNumber1 = Math.floor(Math.random(100000) * 10000000)
    let randomNumber2 = Math.floor(Math.random(100000) * 10000000)
    let randomNumber3 = Math.floor(Math.random(100000) * 10000000)
   
    let cryptoMenu = [
        {key1: "Market Cup", key2: randomNumber1, key3: -1.78, key4: <FaArrowUp />  },
        {key1: "Volume 24h", key2: randomNumber2, key3: 2.78, key4: <FaArrowDown />  },
        {key1: "BTC Dominance", key2: randomNumber3, key3: 3.78 , key4:  <FaArrowUp /> }
    ]
 


    return(
        <div className="crypto" >
            <div>Crypto Tracker</div>
            {
                cryptoMenu.map((cryptoItem) => {
                    return <div className="cryptoTable">
                                <div className="cryptoTableItem">
                                        <p className="cryptoHeader">{cryptoItem.key1}</p>
                                        <span id="cryptoText">{cryptoItem.key2} {cryptoItem.key3} {cryptoItem.key4}</span>
                                </div>
                             </div>;
                })
            }
        </div>
        
        
    )
}


export default Cryptotracker;