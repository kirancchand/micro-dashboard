// import React , {lazy,Suspense,useState, useEffect} from "react";
// // import { BrowserRouter,Route,Switch,Router,Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
// import { StylesProvider,createGenerateClassName } from '@mui/styles';
// import Progress from "./components/Progress";
// import {createBrowserHistory} from 'history';
// import { Provider } from 'react-redux';
// import store from '../re-redux/store';
// import { GlobalStore } from 'redux-micro-frontend';
// import TodoList from '../src/components/TodoList';
// import AuthenticaterHeader from './components/AuthenticaterHeader';
// import { Grid2 as Grid} from '@mui/material';


// // const MenuLazy = lazy(()=>import ('./components/MenuApp'));
// // const MarketingLazy = lazy(()=>import ('./components/MarketingApp'));
// // const AuthLazy = lazy(()=>import ('./components/AuthApp'));
// // const DashboardLazy = lazy(()=>import ('./components/DashboardApp'));
// // const AuthenticatorLazy = lazy(()=>import ('./components/AuthenticatorApp'));
// const UtilsLazy = lazy(()=>import ('./components/UtilsApp'));
// // const DynamicDashboardLazy = lazy(()=>import ('./components/DynamicDashboardApp'));
// const generateClassName=createGenerateClassName({
//     productionPrefix:'co'   ,
// });

// const history=createBrowserHistory();
// export default()=>{
//     const [isSignedIn,setIsSignedIn]=useState(false);
//     const navigate = useNavigate(); // useNavigate for navigation

//     const globalStore = GlobalStore.Get(false);
//     globalStore.RegisterStore('MenuStore', store);
//     globalStore.SubscribeToGlobalState("MenuStore", updateMenuState)
//     function updateMenuState(globalState){
//         console.log("SDFSDFSDFD",globalState.MenuStore.menu.currentMenu)
//         // history.push(globalState.MenuStore.menu.currentMenu);
//         // navigate(globalState.MenuStore.menu.currentMenu); // use navigate

//     }
//     useEffect(()=>{
//         if(isSignedIn){
//             // navigate("/dashboard/home");
//             // history.push('/dashboard/home');
//         }else{
//             // navigate("/");
//             // history.push('/');
//         }
//     },[isSignedIn])

//     const onSelectMenu = (appName) => {
//         // navigate(appName); // use navigate
//         // history.push(appName);
//     };

//     const Menu=()=>{
//        return <Grid item md={2}>
//             <Suspense fallback={<div>Loading..</div>}>
//                 <MenuLazy onSelectMenu={(ev)=>onSelectMenu(ev)}/>
//             </Suspense>
//         </Grid>
//     }

//     return (
//     <Router>
//         <StylesProvider generateClassName={generateClassName}>
//               <Provider store={store}>
//             <div>
//             {/* <AuthenticaterHeader onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/> */}
//                 <Suspense fallback={<div>Utils Loading..</div>}>
//                           <UtilsLazy />
//                 </Suspense>
//                 <Grid container>
//                     <Grid item="true" size={{md:12}}>
//                         <Suspense fallback={<Progress/>}>
//                             <Routes>
//                                 {/* <Route path="/auth" element={<AuthLazy onSignIn={()=>setIsSignedIn(true)}/>} /> */}
//                                 {/* <Route path="/authenticator" element={<AuthenticatorLazy onSignIn={()=>setIsSignedIn(true)}/>} />
//                                 <Route path="/dashboard" element={ <Grid container>
//                                         <Menu/>
//                                         <Grid item md={10}>
//                                             <DashboardLazy/>
//                                         </Grid>
//                                     </Grid>}/> */}
//                                 {/* <Route path="/dynamic" element={ <Grid container>
//                                     <Menu/>
//                                     <Grid item md={10}>
//                                         <DynamicDashboardLazy/>
//                                     </Grid>
//                                 </Grid>}/> */}
//                                 {/* <Route path="/dashboard">
//                                     <Grid container>
//                                         <Menu/>
//                                         <Grid item md={10}>
//                                             <DashboardLazy/>
//                                         </Grid>
//                                     </Grid>
                                    
                                    
//                                 </Route> */}
//                                 {/* <Route path="/dynamic">
//                                     <Grid container>
//                                         <Menu/>
//                                         <Grid item md={10}>
//                                             <DynamicDashboardLazy/>
//                                         </Grid>
//                                     </Grid>
//                                 </Route> */}

//                                 {/* <Route path="/" element={<MarketingLazy/>}/> */}
//                             </Routes>
//                         </Suspense>
//                      </Grid>
//                 </Grid>
//             </div>
//              </Provider>
//         </StylesProvider>
//     </Router>
//      );
// }

import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import Progress from "./components/Progress";
import { Provider } from "react-redux";
import store from "../re-redux/store";
import { GlobalStore } from "redux-micro-frontend";
import TodoList from "../src/components/TodoList";
import AuthenticaterHeader from "./components/AuthenticaterHeader";
import { Grid2 as Grid } from "@mui/material";

// const UtilsLazy = lazy(() => import("./components/UtilsApp"));
// const MenuLazy = lazy(() => import("./components/MenuApp"));
// const MarketingLazy = lazy(() => import("./components/MarketingApp"));
// const AuthLazy = lazy(() => import("./components/AuthApp"));
// const DashboardLazy = lazy(() => import("./components/DashboardApp"));
// const AuthenticatorLazy = lazy(() => import("./components/AuthenticatorApp"));
// const DynamicDashboardLazy = lazy(() => import("./components/DynamicDashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

const AppWrapper = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const globalStore = GlobalStore.Get(false);

  globalStore.RegisterStore("MenuStore", store);
  globalStore.SubscribeToGlobalState("MenuStore", updateMenuState);

  function updateMenuState(globalState) {
    console.log("SDFSDFSDFD", globalState.MenuStore.menu.currentMenu);
    navigate(globalState.MenuStore.menu.currentMenu); // use navigate
  }

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard/home");
    } else {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  const onSelectMenu = (appName) => {
    navigate(appName); // use navigate
  };

  const Menu = () => {
    return (
      <Grid item md={2}>
        <Suspense fallback={<div>Loading..</div>}>
          <MenuLazy onSelectMenu={(ev) => onSelectMenu(ev)} />
        </Suspense>
      </Grid>
    );
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Provider store={store}>
        <div>
        {/* <AuthenticaterHeader onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/> */}
          <Suspense fallback={<div>Utils Loading..</div>}>
            {/* <UtilsLazy /> */}
          </Suspense>
          <Grid container>
            <Grid item="true" size={{md:12}}>
              <Suspense fallback={<Progress />}>
                <Routes>
                  {/* <Route path="/auth/*" element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />} />
                  <Route path="/" element={<MarketingLazy />} /> */}
                  <Route path="/check" element={<div>check</div>}/>
                  <Route path="/" element={<div>Welcome <a href="/check">Click link</a></div>}/>
                </Routes>
              </Suspense>
            </Grid>
          </Grid>
        </div>
      </Provider>
    </StylesProvider>
  );
};
