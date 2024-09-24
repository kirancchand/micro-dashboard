import React , {lazy,Suspense,useState, useEffect} from "react";
import { BrowserRouter,Route,Switch,Router,Redirect ,Link as RouterLink } from "react-router-dom";
import {
    StylesProvider,
    createGenerateClassName,
  } from '@material-ui/core/styles';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from "./components/AuthApp";
import Progress from "./components/Progress";
import Header from './components/Header';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import TodoList from '../src/components/TodoList';
import Grid from '@material-ui/core/Grid';
import Menu from './components/MenuAppComponent/Menu'
import Button from '@material-ui/core/Button';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
const MenuLazy = lazy(()=>import ('./components/MenuApp'));
const MarketingLazy = lazy(()=>import ('./components/MarketingApp'));
const AuthLazy = lazy(()=>import ('./components/AuthApp'));
// const DashboardLazy = lazy(()=>import ('./components/DashboardApp'));
const generateClassName=createGenerateClassName({
    productionPrefix:'co'   ,
});

const history=createBrowserHistory();
export default()=>{

    const [isSignedIn,setIsSignedIn]=useState(false);
    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard');
        }else{
            history.push('/');
        }
    },[isSignedIn])

    const [selectedApp, setSelectedApp] = useState(null);

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
                <Header onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<Progress/>}>
                    <Grid container>
                        <Grid item xs={3}>
                          {/* <MenuLazy onSelect={loadMicroApp}/> */}
                          <Suspense fallback={<div>Loading..</div>}>
                                <MenuLazy onSelectMenu={onSelectMenu}/>
                          </Suspense>
                          {/* <Menu/> */}
                        </Grid>
                        <Grid item xs={9}>
                           <Switch>
                            {/* <Route path="/auth"><AuthLazy onSignIn={()=>setIsSignedIn(true)}/></Route> */}
                            {/* <Route path="/dashboard"> */}
                                {/* {!isSignedIn&&<Redirect to="/" />} */}
                                {/* <DashboardLazy/> */}
                                {/* <MarketingLazy/> */}
                            {/* </Route> */}
                          
                            {/* <Route path="/"><MenuLazy/></Route> */}
                            {/* {selectedApp === 'pricing' && <MarketingLazy />} */}
                            <MarketingLazy/>
                            </Switch>
               
                        </Grid>
                    </Grid>
                   
                </Suspense>
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