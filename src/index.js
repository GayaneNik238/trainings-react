import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import Container from './container';
import Header from './Header'

// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <Header />
      <App />
     <Container />
     <App2 />
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
