
// import React from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from 'react-dom/client';
// import App from './App';
// const mount=(el,{onSelectMenu})=>{
// //    el.innerHTML=products;
// const root = createRoot(el); 
// root.render(<App onSelectMenu={onSelectMenu} />);
// //    ReactDOM.render(<App onSelectMenu={onSelectMenu}/>,el);
// };

// if(process.env.NODE_ENV==="development"){
//     const devRoot=document.querySelector('#_menu-dev-root')

//     if(devRoot){
//         mount(devRoot)
//     }
// }

// export { mount };


import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';

const mount=(el,{onSelectMenu,onNavigate,defaultHistory,initialPath})=>{
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    if(onNavigate){
        history.listen(onNavigate);
    }
   const root = createRoot(el); 
   root.render(<App onSelectMenu={onSelectMenu} />);   

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
    const devRoot = document.querySelector('#_menu-dev-root')

    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

export {mount};