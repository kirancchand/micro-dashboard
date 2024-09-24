import React , {lazy,Suspense,useState, useEffect} from "react";
import { BrowserRouter,Route,Switch,Router,Redirect } from "react-router-dom";
import {
    StylesProvider,
    createGenerateClassName,
  } from '@material-ui/core/styles';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from "./components/AuthApp";
import Progress from "./components/Progress";
import Header from './components/Header';
import AuthenticaterHeader from './components/AuthenticaterHeader';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import { GlobalStore } from 'redux-micro-frontend';
import TodoList from '../src/components/TodoList';
import Grid from '@material-ui/core/Grid';
const MenuLazy = lazy(()=>import ('./components/MenuApp'));
const MarketingLazy = lazy(()=>import ('./components/MarketingApp'));
const AuthLazy = lazy(()=>import ('./components/AuthApp'));
const DashboardLazy = lazy(()=>import ('./components/DashboardApp'));
// const AuthenticatorLazy = lazy(()=>import ('./components/AuthenticatorApp'));
const UtilsLazy = lazy(()=>import ('./components/UtilsApp'));
const generateClassName=createGenerateClassName({
    productionPrefix:'co'   ,
});

const history=createBrowserHistory();
export default()=>{
    const [isSignedIn,setIsSignedIn]=useState(false);
    const globalStore = GlobalStore.Get(false);
    globalStore.SubscribeToGlobalState("MenuStore", updateMenuState)
    // globalStore.SubscribeToGlobalState("AuthStore", updateAuthState)
    function updateMenuState(globalState){
        console.log("container",globalState)
        history.push(globalState.MenuStore.currentMenu);
    }

    // function updateAuthState(globalState){
    //     console.log("container",globalState)
    //     if(globalState.AuthStore!=undefined&&globalState.AuthStore.isSignedIn){
    //         setIsSignedIn(true)
    //         history.push('/dashboard/home');
    //     }else{
    //         setIsSignedIn(false)
    //         history.push('/');  
    //     }
    // }
    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard/home');
        }else{
            history.push('/');
        }
    },[isSignedIn])

    const onSelectMenu = (appName) => {
        console.log("loadMicroApp",appName)
    //   setSelectedApp(appName);
        history.push(appName);
    };
    return (
    // <BrowserRouter>
    <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
              <Provider store={store}>
            <div>
                {/* <Header onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/> */}
                {/* <AuthenticaterHeader onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/> */}
                {/* <div onClick={()=>onSelectMenu("/authenticator/signin")}>sign</div> */}
                <Suspense fallback={<div>Utils Loading..</div>}>
                          <UtilsLazy />
                </Suspense>
                <Grid container>
                    <Grid item md={2}>
                        <Suspense fallback={<div>Loading..</div>}>
                            <MenuLazy onSelectMenu={(ev)=>onSelectMenu(ev)}/>
                        </Suspense>
                        

                    </Grid>
                    <Grid item md={10}>
                        <Suspense fallback={<Progress/>}>
                            <Switch>
                                <Route path="/auth"><AuthLazy onSignIn={()=>setIsSignedIn(true)}/></Route>
                                {/* <Route path="/authenticator"><AuthenticatorLazy onSignIn={()=>setIsSignedIn(true)}/></Route> */}
                                {/* <Route path="/dashboard">
                                    {!isSignedIn&&<Redirect to="/" />}
                                    <DashboardLazy/>
                                    <MarketingLazy/>
                                </Route> */}
                                
                                <Route path="/dashboard">


                                    
                                    <DashboardLazy/>
                                
                                
                                </Route>
                                <Route path="/"><MarketingLazy/></Route>
                            </Switch>
                        </Suspense>
                     </Grid>
                </Grid>
              

                {/* <Provider store={store}> */}
                {/* <ReduxApp/> */}
                {/* </Provider> */}
                {/* <MarketingApp/>  */}

                {/* <TodoList/> */}
            </div>
             </Provider>
        </StylesProvider>
    </Router>
    //  </BrowserRouter>
     );
}