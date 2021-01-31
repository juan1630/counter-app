import React from 'react';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './counter/CounterApp';
// react dom hace las rederizaciones en el html
import './index.css';

import ReactDOM from 'react-dom';

const divRoot = document.querySelector('#root');



// ReactDOM.render( <PrimeraApp saludo="Hola Soy Gokú"/> , divRoot);
ReactDOM.render( <CounterApp value={10} />, divRoot );
