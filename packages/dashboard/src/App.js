import React,{lazy,useState} from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// const HomeLazy = lazy(()=>import ('./components/Home'));
import Home from "./components/Home";
import Counter from "./components/counter";
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import { useSelector,useDispatch } from 'react-redux';
import { GlobalStore } from 'redux-micro-frontend';
import CounterReducer  from '../re-redux/counterReducer'
import { IncrementLocalCounter, DecrementLocalCounter } from '../re-redux/local.actions'
import { IncrementGlobalCounter, DecrementGlobalCounter } from '../re-redux/global.actions';
import { createStore } from 'redux';
import DashboardHome from "./components/DashboardHome";
import DashboardPage from "./components/DashboardPage";
const generateClassName=createGenerateClassName({
    productionPrefix:'ha'   ,
});

export default({history})=>{
  // console.log("history",history)
  const [mystate,setMyState]=useState({local: 0,global: 0,todo: 0})
  const globalStore = GlobalStore.Get(false);
  // const store = createStore(CounterReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // const store = globalStore.CreateStore("CounterApp", CounterReducer, []);
  globalStore.RegisterStore('CounterApp', store);
  globalStore.RegisterGlobalActions("CounterApp", ["INCREMENT_GLOBAL", "DECREMENT_GLOBAL", "ADD_TODO", "REMOVE_TODO"]);
  globalStore.SubscribeToGlobalState("CounterApp", updateState)


const incrementLocalCounter=()=>{
  globalStore.DispatchAction("CounterApp", IncrementLocalCounter());
}

const decrementLocalCounter=()=>{
  globalStore.DispatchAction("CounterApp", DecrementLocalCounter());
}

const incrementGlobalCounter=()=>{
  globalStore.DispatchAction("CounterApp", IncrementGlobalCounter());
}

const decrementGlobalCounter=()=>{
  globalStore.DispatchAction("CounterApp", DecrementGlobalCounter());
}

function updateState(globalState){

  setMyState({
      local: globalState.CounterApp.local,
      global: globalState.CounterApp.global,
      todo: globalState.CounterApp.todo
  });
}



    return <div style={{border:"1px solid #000"}}>
        <StylesProvider generateClassName={generateClassName}>
          <Provider store={store}>
          <Router history={history}>
                <Switch>
                    <Route path="/dashboard/home" component={DashboardHome}/>
                    <Route path="/dashboard/page" component={DashboardPage}/>
                </Switch>
            </Router>
            {/* <Home/> */}
            {/* <Counter count={mystate.global} header="Global Counter" increment={incrementGlobalCounter} decrement={decrementGlobalCounter}></Counter>
            <Counter count={mystate.local} header="Local Counter" increment={incrementLocalCounter} decrement={decrementLocalCounter}></Counter> */}
          </Provider>

          {/* <AppCounter/> */}
        </StylesProvider>
    </div>
}