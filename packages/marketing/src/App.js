import React from "react";
// import { Switch, Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@mui/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName=createGenerateClassName({
    productionPrefix:'ma'   ,
});

export default({history})=>{
    return <div >
        <StylesProvider generateClassName={generateClassName}>
             <Router history={history}>
                <Routes>
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Router>
        </StylesProvider>
    </div>
}
