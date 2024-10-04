import React from "react";
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@mui/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import Counter from './components/Counter';
import { GlobalStore } from 'redux-micro-frontend';
import { SelectMenuFunc } from '../re-redux/actions';
import { MemoryRouter } from 'react-router';

const generateClassName=createGenerateClassName({
    productionPrefix:'au'   ,
});

export default({history,onSignIn,isStandAlone})=>{
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

    const routes = (
      <Routes>
        <Route path="/auth/signin" element={<Signin onSignIn={onSignIn} />} />
        <Route path="/auth/signup" element={<Signup onSignIn={onSignIn} />} />
      </Routes>
    );

    if (isStandAlone) {
      return <StylesProvider generateClassName={generateClassName}>
          <BrowserRouter>{routes}</BrowserRouter>
      </StylesProvider>
      
      
    }

    return <StylesProvider generateClassName={generateClassName}>
      <Router 
    location={history.location}
     navigator={history}
     >{routes}</Router>;
  </StylesProvider>
    
  
    // return <div>
    //     <StylesProvider generateClassName={generateClassName}>
    //     <Provider store={store}>
    //          <Router history={history}>
    //             <Routes>
    //                 <Route path="/auth/signin" element={<Signin onSignIn={onSignIn} />} />
    //                 <Route path="/auth/signup" element={<Signup onSignIn={onSignIn} />} />
    //             </Routes>
    //         </Router>
    //         <Counter />
    //       </Provider>
    //     </StylesProvider>
    // </div>
}