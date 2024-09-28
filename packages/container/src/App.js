import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import Progress from "./components/Progress";
import { Provider } from "react-redux";
import store from "../re-redux/store";
import { GlobalStore } from "redux-micro-frontend";
import { Grid2 as Grid } from "@mui/material";
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
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
  const navigate = useNavigate();
  const onSelectMenu = (appName) => {
    navigate(appName); // use navigate
  };
  return (
         <StylesProvider generateClassName={generateClassName}>
          <Provider store={store}>
          <div>Welcome <div onClick={()=>onSelectMenu("/pricing")}>Click link</div></div>
          <div>Welcome <div onClick={()=>onSelectMenu("/")}>Click home</div></div>
          <div>Welcome <div onClick={()=>onSelectMenu("/check")}>Click check</div></div>
            <Routes>
              <Route path="/check" element={<div>check</div>}/>
              <Route path="/*" element={<MarketingLazy />} />
              {/* <Route path="/" element={<div>Welcome <div onClick={()=>onSelectMenu("/check")}>Click link</div></div>}/> */}
            </Routes>
            </Provider>
          </StylesProvider>
  );
};
