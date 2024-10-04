// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { createMemoryHistory, createBrowserHistory } from 'history';
// import { Provider } from "react-redux";
// import store from "../re-redux/store";
// import App from './App';
// // The 'mount' function to start up the app
// const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
//     // console.log("onNavigate",onNavigate)



//   const history = defaultHistory || createMemoryHistory({
//     initialEntries: [initialPath] // Make sure initial path is set for correct navigation
//   });

//   if (onNavigate) {
//     history.listen(onNavigate);
//   }
// // console.log("el",el._root)

// if(!el._root){
//     // console.log("!el",el) 
//     el._root = createRoot(el);
// }
// // console.log("el root",el._root)
// // console.log("initialPath",initialPath)
// // console.log("defaultHistory",defaultHistory)
// // console.log("history",history)
// // console.log("location",location)
// //   const root = createRoot(el);
// // console.log(initialPath)
// console.log(history.location)
//   el._root.render(<Provider store={store}><App history={history} isStandAlone={initialPath===undefined?true:false}/></Provider>);
//   return {
//     onParentNavigate({ pathname: nextPathname }) {
//       const { pathname } = history.location;
//       console.log(history.location.pathname)
//       console.log(nextPathname)
//       if (pathname !== nextPathname) {
//         history.push(nextPathname);
//       }
//     }
//   };
// };

// // In development, mount the app immediately
// if (process.env.NODE_ENV === 'development') {
//   const devRoot = document.querySelector('#_marketing-dev-root');
//   if (devRoot) {
//     mount(devRoot, { defaultHistory: createBrowserHistory() });
//   }
// }

// export { mount };

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { Provider } from "react-redux";
import store from "../re-redux/store";
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath] // Ensure the correct initial path for navigation
  });

  if (onNavigate) {
    history.listen(({ location }) => {
      onNavigate(location);
    });
  }

  if (!el._root) {
    el._root = createRoot(el);
  }

  el._root.render(
    <Provider store={store}>
      <App history={history} isStandAlone={!initialPath} />
    </Provider>
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname: currentPathname } = history.location;
      if (currentPathname !== nextPathname) {
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
