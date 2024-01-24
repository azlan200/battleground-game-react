import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ScoreAdd from './Score_Add';
import Boat from './Boat';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <ScoreAdd />
    < Boat />
    </>

   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
