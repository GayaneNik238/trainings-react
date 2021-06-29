import './App.css';
import React from "react";
import Header from './Header';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


import AdJob from './AdJob';


function App() {

  let sideMenu = [
    {menuItem: 'Jobs'},
    {menuItem: 'Trainings'},
    {menuItem: 'Market Data'},
    {menuItem: 'Internships'},
    {menuItem: 'More than 500 workers'},
    {menuItem: 'More than 1000 jobs done'},
    {menuItem: '100+ new workers per year'},
  ]
  


  return (
    <div className="App"> 
    <Header />
    { 
      sideMenu.map((sideMenuItem) => {
        return <div>
          <p className="menuItem"> <IoCheckmarkDoneCircleOutline /> {sideMenuItem.menuItem}</p> 
        </div>;
      })
    }


    <AdJob />
         
    </div>
  )
}


export default App;
