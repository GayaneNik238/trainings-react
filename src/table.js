import React, { Component } from 'react';
import './App.css';
import { BsThreeDots } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { CgShapeRhombus } from "react-icons/cg";
import { FaEthereum } from "react-icons/fa";
import { RiVirusFill } from "react-icons/ri";
import { SiLetterboxd } from "react-icons/si";
import { SiXrp } from "react-icons/si";
import { ImCoinEuro } from "react-icons/im";


let iconDots = <BsThreeDots />;
// let change = "24H change";
// let priceBTC = "price in BTC";
// let marketCap = "Market Cup";
// let volume = "volume 24H" ;


class Table extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            table: [
                { id: 1, nameIcon: <FaBitcoin />, name: 'Bitcoin', change: '-9.89%'
               //  , price: "$32,439.98", priceBTC: "1.0000000", marketCap:"$607.6B", volume :"$2.7T", icon: iconDots 
               },
               { id: 1, nameIcon: <FaBitcoin />, name: 'Bitcoin', change: '-9.89%'},
               { id: 1, nameIcon: <FaBitcoin />, name: 'Bitcoin', change: '-9.89%'},
               { id: 1, nameIcon: <FaBitcoin />, name: 'Bitcoin', change: '-9.89%'},
               { id: 1, nameIcon: <FaBitcoin />, name: 'Bitcoin', change: '-9.89%'},
               { id: 1, nameIcon: <FaBitcoin />, name: 'Bitcoin', change: '-9.89%'},
               //  { id: 2,  nameIcon: <FaEthereum />,name: 'Ethereum', change: '-8.89%', price: "$2,517.86", priceBTC: "0.07631326" , marketCap:"$292.6B" , volume :"$1.5T", icon: iconDots  },
               //  { id: 3,  nameIcon: <FaBitcoin />,name: 'Tether', change: '0.06%', price: "$1", priceBTC: "0.00003034" , marketCap:"$62.5B" , volume :"$186.4B ", icon: iconDots  },
               //  { id: 4,  nameIcon: <CgShapeRhombus />,name: 'Binance Coin', change: '-10.51%', price: "$353.42" , priceBTC: "0.01067125", marketCap:"$54.6B" , volume :"$51.6B" , icon: iconDots },
               //  { id: 5, nameIcon: <RiVirusFill />, name: 'Cardano', change: '-9.89%', price: "$1.55", priceBTC: "0.0000468", marketCap:"$49.7B", volume :"$3.7B", icon: iconDots },
               //  { id: 6,  nameIcon: <SiLetterboxd />,name: 'Dogecoin', change: '-10.99%', price: "$0.328928", priceBTC: "0.00000993" , marketCap:"$42.7B" , volume :"$5.4B", icon: iconDots  },
               //  { id: 7,  nameIcon: <SiXrp />,name: 'XRP', change: '-8.32%', price: "$0.871867", priceBTC: "0.00002627" , marketCap:"$40.2B" , volume :"$5.7B", icon: iconDots  },
               //  { id: 8,  nameIcon: <ImCoinEuro />,name: 'Enjin Coin', change: '-10.70%', price: "$1.31" , priceBTC: "0.00003957", marketCap:"$1.2B" , volume :"$206.9M" , icon: iconDots }
            ]
        }
        
    }
  
    renderTableData() {
        return this.state.table.map((tableItem, index) => {
           const { id, nameIcon,name, change, price, priceBTC, marketCap, volume , icon } = tableItem;
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{nameIcon}</td>
                 <td>{name}</td>
                 <td>{change}</td>
                 {/* <td>{price}</td>
                 <td>{priceBTC}</td>
                 <td>{marketCap}</td>
                 <td>{volume }</td>
                 <td>{icon}</td> */}
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.table[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render() { 
        return (
           <div>
              <table id='table'>
                <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
           </div>
        )
     }
  }





export default Table;