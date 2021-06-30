import React, { Component } from 'react';
import './App.css';
import img1 from './images/1.jpg';
import { ImLocation2 } from "react-icons/im";

let img = <img src={img1} height="100px" width="80px"/>
let btn = <button className="viewMore">View More</button>

class Table extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            table: [
               { logo: img, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "SFL", training: 'Angular', level: 'Middle', location: 'Stepanakert', btn: btn},
               { logo: img, company: "ItHire", training: 'UI/UX', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "Picsart", training: 'Scrum / Agile', level: 'beginner', location: 'Gyumri', btn: btn},
               { logo: img, company: "Microsoft", training: 'IT English', level: 'beginner', location: 'Vanazor', btn: btn},
               { logo: img, company: "Volo", training: 'Web Design', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img, company: "Workfront", training: 'Java', level: 'Middle', location: 'Kapan', btn: btn},
               { logo: img, company: "Innorise", training: 'C++', level: 'Middle', location: 'Yerevan', btn: btn}
            
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