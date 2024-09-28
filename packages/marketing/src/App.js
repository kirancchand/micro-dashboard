import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

// The App component itself doesn't need to change much
const App = ({ history,defaultHistory }) => {
  const routes = (
    <Routes>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<div>404 Not Found</div>} /> {/* Fallback route */}
    </Routes>
  );

  // If history is provided (i.e., running as micro frontend), use Router
  if (!defaultHistory) {
    return <Router location={history.location} navigator={history}>{routes}</Router>;
  }

  // Otherwise, use BrowserRouter for standalone operation
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
