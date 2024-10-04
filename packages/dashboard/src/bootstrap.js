// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createMemoryHistory,createBrowserHistory } from 'history';
// import App from './App';
// import Home from './components/Home';
// const mount = (el) => {
//   // const app = createApp(Dashboard);
//   // app.mount(el);
//   ReactDOM.render(<App/>,el);
// };

// ///dev
// // If we are in development and in isolation,
// // call mount immediately
// if (process.env.NODE_ENV === 'development') {
//   const devRoot = document.querySelector('#_dashboard-dev-root');

//   if (devRoot) {
//     mount(devRoot);
//   }
// }

// // We are running through container
// // and we should export the mount function
// export { mount };

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';
import { Provider } from "react-redux";
import store from "../re-redux/store";
const mount=(el,{onNavigate,defaultHistory,initialPath})=>{
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
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
    // ReactDOM.render(<App history={history} />,el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname: currentPathname } = history.location;
            if (currentPathname !== nextPathname) {
              history.push(nextPathname);
            }
          }
    }
};

///dev
if(process.env.NODE_ENV==='development'){
    const devRoot = document.querySelector('#_dashboard-dev-root')

    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

export {mount};