import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';
const mount=(el,{onSignIn,onNavigate,defaultHistory,initialPath})=>{
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    if(onNavigate){
        history.listen(onNavigate);
    }
    
    const root = createRoot(el); 
    root.render(<App onSignIn={onSignIn} history={history} />);
    // ReactDOM.render(<App onSignIn={onSignIn} history={history} />,el);

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
    const devRoot = document.querySelector('#_authenticator-dev-root')

    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

export {mount};