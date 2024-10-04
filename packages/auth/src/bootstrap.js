import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
const mount=(el,{onSignIn,onNavigate,defaultHistory,initialPath})=>{
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    if (onNavigate) {
        history.listen(({ location }) => {
          onNavigate(location);
        });
      }
    console.log("history",history)

    if(!el._root){
        // console.log("!el",el) 
        el._root = createRoot(el);
    }
    console.log(store)
    // const root = createRoot(el); 
    el._root.render( <Provider store={store}><App onSignIn={onSignIn} history={history} isStandAlone={!initialPath}/></Provider>);
    // root.render(<App onSignIn={onSignIn} history={history} />);

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
    const devRoot = document.querySelector('#_auth-dev-root')

    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

export {mount};


