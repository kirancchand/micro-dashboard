import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';
import { Provider } from "react-redux";
import store from "../re-redux/store";
const mount=(el,{onNavigate,defaultHistory,initialPath})=>{

    console.log("initialPath",initialPath)

    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    console.log("history",history)
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
    // const root = createRoot(el); 
    // root.render(<App history={history} />);

    // ReactDOM.render(<App history={history} />,el);

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
    const devRoot = document.querySelector('#_utils-dev-root')

    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

export {mount};

