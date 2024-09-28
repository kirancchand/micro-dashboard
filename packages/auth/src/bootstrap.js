import React from 'react';
import ReactDOM from 'react-dom';
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
    console.log("history",history)
    const root = createRoot(el); 
    root.render(<App onSignIn={onSignIn} history={history} />);

    return {
        onParentNavigate({pathname:nextPathname}){
            const {pathname}=history.location;
            console.log(nextPathname)
            if(pathname!==nextPathname){
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


