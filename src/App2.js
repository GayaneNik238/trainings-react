import './App.css';
import React from "react";
import Header from './Header';
// import { BsArrowLeftRight } from "react-icons/bs";
import rightBar from './images/rightBar.png';


function App() {

  // let sideMenu = [
  //   {menuItem: 'Swap'},
  //   {menuItem: 'Flat to Crypto'},
  //   {menuItem: 'Market Data'},
  //   {menuItem: 'Stake/Farm BMI'},
  //   {menuItem: 'Claims Assessment'},
  //   {menuItem: 'Shield Mining'},
  //   {menuItem: 'DAO'},
  //   {menuItem: 'Farming'},
  //   {menuItem: 'Statistics'},
  //   {menuItem: 'Settings'}
  // ]
  
  return (
    <div className="App"> 
    <img src={rightBar} height="300px" width="100%"/>
    <div>
      <h1>Today's top courses</h1>
      <h4>1. How To Be Both Assertive and Likable</h4>
      <p>American Negotation Institute and Kwame Christian</p>
      <p>American Negotation Institute and Kwame Christian</p>
      <p>Show more on FindMe</p>

    </div>
    {/* <Header /> */}
    {/* {
      sideMenu.map((sideMenuItem) => {
        return <div>
          <p className="menuItem">  {sideMenuItem.menuItem}</p> 
        </div>;
      })
    }
          */}
    </div>
  )
}


export default App;
