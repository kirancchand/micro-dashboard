import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "../re-redux/store";
const root = createRoot(document.querySelector('#root')); 

root.render(<Provider store={store}><App /></Provider>);

// ReactDOM.render(<App/>,document.querySelector('#root'));