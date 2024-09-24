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
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';
const mount=(el,{onNavigate,defaultHistory,initialPath})=>{
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    if(onNavigate){
        history.listen(onNavigate);
    }
    
    ReactDOM.render(<App history={history} />,el);

    return {
        onParentNavigate({pathname:nextPathname}){
            const {pathname}=history.location;
            if(pathname!==nextPathname){
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