import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root')); 
root.render(<App />);

// ReactDOM.render(<App/>,document.querySelector('#root'));