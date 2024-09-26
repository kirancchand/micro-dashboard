import React from "react";
// import { Switch, Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@mui/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';
// import { Provider } from 'react-redux';
// import store from '../re-redux/store';
// import Counter from './components/Counter';
const generateClassName=createGenerateClassName({
    productionPrefix:'aur'   ,
});
export default({history,onSignIn})=>{
    // const onSignIn=()=>{

    // }
    return  <StylesProvider generateClassName={generateClassName}>
             <Router history={history}>
                <Routes>
                    <Route path="/authenticator/signin" element={<Signin onSignIn={onSignIn} />} />
                    <Route path="/authenticator/signup" element={<Signup onSignIn={onSignIn} />} />
                </Routes>
            </Router>
        </StylesProvider>

}