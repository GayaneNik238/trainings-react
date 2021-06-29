import React, { Component } from 'react';
import './App.css';
import img1 from './images/1.jpg';
import { ImLocation2 } from "react-icons/im";

let img = <img src={img1} height="100px"/>
let btn = <button>View More</button>

class Table extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            table: [
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn}
            
            ]
        }
        
    }
  
    renderTableData() {
        return this.state.table.map((tableItem, index) => {
           const { logo, company,training, level, location} = tableItem;
           return (
              <tr >
                 <td>{logo}</td>
                 <td>{company}</td>
                 <td>{training}</td>
                 <td>{level}</td>
                 <td><ImLocation2 />{location}</td>
                 <td>{btn}</td>
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