import React from 'react';
import { BrowserRouter,  Router, Routes, Route,Switch ,HashRouter} from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { StylesProvider,createGenerateClassName } from '@mui/styles';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
const generateClassName=createGenerateClassName({
  productionPrefix:'ma'   ,
});
import { createBrowserHistory } from "history";
const defaultHistory = createBrowserHistory();
// The App component itself doesn't need to change much
const App = ({ history,isStandAlone }) => {
  // console.log("isStandAlone",isStandAlone)
  const routes = (
    <Routes>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<div>404 Not Found</div>} /> {/* Fallback route */}
    </Routes>
  );

  // console.log("defaultHistory",defaultHistory)
  // console.log("history",history)
  // If history is provided (i.e., running as micro frontend), use Router
  if (isStandAlone) {
    return <BrowserRouter>
    {routes}
    </BrowserRouter>
   
  }
  // return <Router history={history}>{routes}</Router>;
  return <Router 
    initialEntries={['/']} 
    location={history.location}
     navigator={history}
     >
      {routes}</Router>;
   
  // Otherwise, use BrowserRouter for standalone operation


};

export default App;
