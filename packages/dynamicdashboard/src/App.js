import React,{lazy,useState} from "react";
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@mui/styles';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import DynamicDashboardHome from "./components/DynamicDashboardHome";
import DynamicDashboardPage from "./components/DynamicDashboardPage";
const generateClassName=createGenerateClassName({
    productionPrefix:'dy-da'   ,
});

export default({history,isStandAlone})=>{

    const routes = (
        <Routes>
             <Route path="/dynamic/home" element={<DynamicDashboardHome/>}/>
             <Route path="/dynamic/page" element={<DynamicDashboardPage/>}/>
        </Routes>
      );

    if (isStandAlone) {
    return <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
        {routes}
        </BrowserRouter>
    </StylesProvider>
    
    }

    return <StylesProvider generateClassName={generateClassName}>
        <Router 
        location={history.location}
        navigator={history}
        >
      {routes}
      </Router></StylesProvider>;

    // return <div style={{border:"1px solid #000"}}>
    //     <StylesProvider generateClassName={generateClassName}>
    //       <Provider store={store}>
    //         Dynamic Dashboard
    //         <Router history={history}>
    //             <Routes>
    //                 <Route path="/dynamic/home" element={<DynamicDashboardHome/>}/>
    //                 <Route path="/dynamic/page" element={<DynamicDashboardPage/>}/>
    //             </Routes>
    //       </Router>
    //       </Provider>
    //     </StylesProvider>
    // </div>
}