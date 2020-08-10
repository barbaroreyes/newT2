import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Componnt/Card';
import robots from './Componnt/robots';


ReactDOM.render(
  <React.StrictMode>
   <Card id={robots[0].id} name ={robots[0].name} email={robots[0].e}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

