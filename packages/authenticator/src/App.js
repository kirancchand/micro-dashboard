import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
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
                <Switch>
                    <Route path="/authenticator/signin"><Signin onSignIn={onSignIn}/></Route>
                    <Route path="/authenticator/signup"><Signup onSignIn={onSignIn}/></Route>
                </Switch>
            </Router>
        </StylesProvider>

}