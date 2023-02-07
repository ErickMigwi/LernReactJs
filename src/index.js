import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'; 
import Counters from './components/counters';
import { Counter1 } from './components/counterAssignment';
// How to display to an element in the index.js
const element =<h1>Hello world</h1> 
console.log(element);
ReactDOM.render(<Counter1/>, document.getElementById("root"))
