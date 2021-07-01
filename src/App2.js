import './App.css';
import React from "react";
import Header from './Header';
// import { BsArrowLeftRight } from "react-icons/bs";
import rightBar from './images/right-bar.jpg';
import { BsArrowBarRight } from "react-icons/bs";


function App() {
  return (
    <div className="App"> 
    <img src={rightBar} height="300px" width="100%"/>
    <div className="right-bar-desc">
     <div>
     <h3>Today's top courses</h3>
      <h5>1. How To Be Both Assertive and Likable</h5>
      <h6>American Negotation Institute and Kwame Christian</h6>
      <h6>Show more on FindMe <BsArrowBarRight /></h6>
     </div>

    </div>
    </div>
  )
}


export default App;
