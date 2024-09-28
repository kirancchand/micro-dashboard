import React from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// The 'mount' function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    // console.log("onNavigate",onNavigate)
    console.log("defaultHistory",defaultHistory)
    // console.log("initialPath",initialPath)
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath] // Make sure initial path is set for correct navigation
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }
// console.log("el",el._root)

if(!el._root){
    // console.log("!el",el) 
    el._root = createRoot(el);
}
// console.log("el root",el._root)
console.log(history)
//   const root = createRoot(el);
  el._root.render(<App history={history} defaultHistory={defaultHistory}/>);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};

// In development, mount the app immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
