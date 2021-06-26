import './App.css';
import React from "react";
import Header from './header';
import { BsArrowLeftRight } from "react-icons/bs";

function App() {

  let sideMenu = [
    {menuItem: 'Swap'},
    {menuItem: 'Flat to Crypto'},
    {menuItem: 'Market Data'},
    {menuItem: 'Stake/Farm BMI'},
    {menuItem: 'Claims Assessment'},
    {menuItem: 'Shield Mining'},
    {menuItem: 'DAO'},
    {menuItem: 'Farming'},
    {menuItem: 'Statistics'},
    {menuItem: 'Settings'}
  ]
  
  return (
    <div className="App"> 
    <Header />
    {
      sideMenu.map((sideMenuItem) => {
        return <div>
          <p className="menuItem"> <BsArrowLeftRight /> {sideMenuItem.menuItem}</p> 
        </div>;
      })
    }
         
    </div>
  )
}


export default App;
