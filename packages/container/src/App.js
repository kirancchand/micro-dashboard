import React , {lazy,Suspense,useState, useEffect} from "react";
import { BrowserRouter,Route,Switch,Router,Redirect } from "react-router-dom";
import {
    StylesProvider,
    createGenerateClassName,
  } from '@material-ui/core/styles';
import Progress from "./components/Progress";
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
const DynamicDashboardLazy = lazy(()=>import ('./components/DynamicDashboardApp'));
const generateClassName=createGenerateClassName({
    productionPrefix:'co'   ,
});

const history=createBrowserHistory();
export default()=>{
    const [isSignedIn,setIsSignedIn]=useState(false);
    const globalStore = GlobalStore.Get(false);
    globalStore.RegisterStore('MenuStore', store);
    globalStore.SubscribeToGlobalState("MenuStore", updateMenuState)
    function updateMenuState(globalState){
        history.push(globalState.MenuStore.menu.currentMenu);
    }
    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard/home');
        }else{
            history.push('/');
        }
    },[isSignedIn])

    const onSelectMenu = (appName) => {
        history.push(appName);
    };

    const Menu=()=>{
       return <Grid item md={2}>
            <Suspense fallback={<div>Loading..</div>}>
                <MenuLazy onSelectMenu={(ev)=>onSelectMenu(ev)}/>
            </Suspense>
        </Grid>
    }
    return (
    <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
              <Provider store={store}>
            <div>
                <Suspense fallback={<div>Utils Loading..</div>}>
                          <UtilsLazy />
                </Suspense>
                <Grid container>
                    <Grid item md={12}>
                        <Suspense fallback={<Progress/>}>
                            <Switch>
                                <Route path="/auth"><AuthLazy onSignIn={()=>setIsSignedIn(true)}/></Route>
                                <Route path="/dashboard">
                                    <Grid container>
                                        <Menu/>
                                        <Grid item md={10}>
                                            <DashboardLazy/>
                                            {/* <DynamicDashboardLazy/> */}
                                        </Grid>
                                    </Grid>
                                    
                                    
                                </Route>
                                <Route path="/dynamic">
                                    <Grid container>
                                        <Menu/>
                                        <Grid item md={10}>
                                            <DynamicDashboardLazy/>
                                        </Grid>
                                    </Grid>
                                </Route>

                                <Route path="/"><MarketingLazy/></Route>
                            </Switch>
                        </Suspense>
                     </Grid>
                </Grid>
            </div>
             </Provider>
        </StylesProvider>
    </Router>
     );
}