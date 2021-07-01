import React, { Component } from 'react';
import './App.css';
import img1 from './images/1.jpg';
import img2 from './images/6.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.png';
import img6 from './images/2.jpg';
import img7 from './images/7.jpg';

import { ImLocation2 } from "react-icons/im";

let img11 = <img src={img1} height="80px" width="80px"/>;
let img22 = <img src={img2} height="80px" width="80px"/>;
let img33 = <img src={img3} height="80px" width="80px"/>;
let img44 = <img src={img4} height="80px" width="80px"/>;
let img55 = <img src={img5} height="80px" width="80px"/>;
let img66 = <img src={img6} height="80px" width="80px"/>;
let img77 = <img src={img7} height="80px" width="80px"/>;
let btn = <button className="viewMore">View More</button>

class Table extends Component{
    constructor(props) {
        super(props)
        this.state = {
            table: [
               { logo: img11, company: "EPAM", training: 'React JS', level: 'beginner', location: 'Yerevan'},
               { logo: img22, company: "SFL", training: 'Angular', level: 'Middle', location: 'Stepanakert', btn: btn},
               { logo: img33, company: "ItHire", training: 'UI/UX', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img44, company: "Picsart", training: 'Scrum / Agile', level: 'beginner', location: 'Gyumri', btn: btn},
               { logo: img55, company: "Microsoft", training: 'IT English', level: 'beginner', location: 'Vanazor', btn: btn},
               { logo: img66, company: "Volo", training: 'Web Design', level: 'beginner', location: 'Yerevan', btn: btn},
               { logo: img77, company: "Workfront", training: 'Java', level: 'Middle', location: 'Kapan', btn: btn},
               // { logo: img, company: "Innorise", training: 'C++', level: 'Middle', location: 'Yerevan', btn: btn}
            
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