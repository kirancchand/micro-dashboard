import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@mui/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import Counter from './components/Counter';
import { GlobalStore } from 'redux-micro-frontend';
import { SelectMenuFunc } from '../re-redux/actions';


const generateClassName=createGenerateClassName({
    productionPrefix:'au'   ,
});

export default({history,onSignIn})=>{
    const globalStore = GlobalStore.Get(false);
    globalStore.RegisterStore('AuthStore', store);
    // globalStore.RegisterGlobalActions("AuthStore", ["SELECTEDMENU"]);
    globalStore.SubscribeToGlobalState("AuthStore", updateState)
    function updateState(globalAuthState){
      console.log("globalState",globalAuthState)
      if(globalAuthState.AuthStore.isSignedIn){
        // globalStore.DispatchAction("MenuStore",SelectMenuFunc("/dashboard/home"));

      }
     
    }
    return <div>
        <StylesProvider generateClassName={generateClassName}>
        <Provider store={store}>
             <Router history={history}>
                <Routes>
                    <Route path="/auth/signin" element={<Signin onSignIn={onSignIn} />} />
                    <Route path="/auth/signup" element={<Signup onSignIn={onSignIn} />} />
                </Routes>
            </Router>
            <Counter />
          </Provider>
        </StylesProvider>
    </div>
}