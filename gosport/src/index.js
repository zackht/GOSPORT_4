import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Side2 from './side/rentsid_more';
import Backqa from './back/backqa';
import reportWebVitals from './reportWebVitals';
import Backteam from './back/backarticleteam';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Side2/> */}
    <Backqa/>
    {/* <Backteam/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
