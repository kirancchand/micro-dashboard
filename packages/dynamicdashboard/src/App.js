import React,{lazy,useState} from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import DynamicDashboardHome from "./components/DynamicDashboardHome";
import DynamicDashboardPage from "./components/DynamicDashboardPage";
const generateClassName=createGenerateClassName({
    productionPrefix:'dy-da'   ,
});

export default({history})=>{

    return <div style={{border:"1px solid #000"}}>
        <StylesProvider generateClassName={generateClassName}>
          <Provider store={store}>
            Dynamic Dashboard
          <Router history={history}>

                <Switch>
                    <Route path="/dynamic/home" component={DynamicDashboardHome}/>
                    <Route path="/dynamic/page" component={DynamicDashboardPage}/>
                </Switch>
            </Router>
          </Provider>
        </StylesProvider>
    </div>
}