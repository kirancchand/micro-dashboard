import React from "react";
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import Header from "./components/Header";
export default()=>{
  return (<div>
        <Provider store={store}>
            <Header/>
        </Provider>
 </div>)
 }
