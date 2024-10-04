import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,Link,useNavigate,HashRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import Progress from "./components/Progress";
import { Provider } from "react-redux";
import store from "../re-redux/store";
import { GlobalStore } from "redux-micro-frontend";
import { Grid2 as Grid } from "@mui/material";
// import Header from './components/Header';
import AuthenticaterHeader from "./components/AuthenticaterHeader";
import {createBrowserHistory} from 'history';

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(()=>import ('./components/DashboardApp'));
const MenuLazy = lazy(()=>import ('./components/MenuApp'));
const UtilsLazy = lazy(()=>import ('./components/UtilsApp'));
const DynamicDashboardLazy = lazy(()=>import ('./components/DynamicDashboardApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
const history=createBrowserHistory();

export default () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

const AppWrapper = () => {
  const navigate = useNavigate();
  const onSelectMenu = (appName) => {
    navigate(appName); // use navigate
    // history.push(appName)
  };
  const [isSignedIn,setIsSignedIn]=useState(false);
  const globalStore = GlobalStore.Get(false);
  globalStore.RegisterStore('MenuStore', store);
  globalStore.SubscribeToGlobalState("MenuStore", updateMenuState)
  function updateMenuState(globalState){
      // history.push(globalState.MenuStore.menu.currentMenu);
      navigate(globalState.MenuStore.menu.currentMenu);
  }

  const Menu=()=>{
    return <Grid item="true" md={2}>
         <Suspense fallback={<div>Loading..</div>}>
             <MenuLazy onSelectMenu={(ev)=>onSelectMenu(ev)}/>
         </Suspense>
     </Grid>
 }

 const Dashboard=()=>{
  return <Grid container>
    <Grid item="true" md={2}>
       <Menu/>
    </Grid>
  <Grid item="true" md={10}>
      <DashboardLazy/>
      {/* <DynamicDashboardLazy/> */}
  </Grid>
</Grid>
}

 const DynamicDashboard=()=>{
  return <Grid container>
    <Grid item="true" md={2}>
       <Menu/>
    </Grid>
  <Grid item="true" md={10}>
      <DynamicDashboardLazy/>
  </Grid>
</Grid>
}

  return (
         <StylesProvider generateClassName={generateClassName}>
          {/* <Provider store={store}> */}
          <div>Welcome <span onClick={()=>onSelectMenu("/pricing")}>Click Pricing</span></div>
          <div>Welcome <span onClick={()=>onSelectMenu("/")}>Click home</span></div>
          <div>Welcome <span onClick={()=>onSelectMenu("/check")}>Click check</span></div>
          <div>Welcome <span onClick={()=>onSelectMenu("/auth/signin")}>Click signin</span></div>
          <Link to="/pricing">
                        <span variant="contained" color="white">
                        Pricing
                        </span>
          </Link>
          {/* <AuthenticaterHeader onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/> */}
          {/* <Header onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/> */}
          <Suspense fallback={<div>Utils Loading..</div>}>
                          <UtilsLazy />
                </Suspense>
            <Grid container>
              <Grid item="true" size={{md:12}}>
                <Suspense fallback={<Progress />}>
                    <Routes>
                      <Route path="/auth/*" element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />} />
                      <Route path="/check" element={<div>check</div>}/>
                      <Route path="/*" element={<MarketingLazy />} />
                      <Route path="/dashboard/*" element={<Dashboard/>}/>
                      <Route path="/dynamic/*" element={<DynamicDashboard/>}/>
                    </Routes>
                  </Suspense>
              </Grid>
            </Grid>
            {/* </Provider> */}
          </StylesProvider>
  );
};
