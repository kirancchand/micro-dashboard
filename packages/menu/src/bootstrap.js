
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
const mount=(el,{onSelectMenu})=>{
//    el.innerHTML=products;
   ReactDOM.render(<App onSelectMenu={onSelectMenu}/>,el);
};

if(process.env.NODE_ENV==="development"){
    const el=document.querySelector('#_menu-dev-root')

    if(el){
        mount(el)
    }
}

export { mount };


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createMemoryHistory,createBrowserHistory } from 'history';
// import App from './App';

// const mount=(el,{onSelectMenu,onNavigate,defaultHistory,initialPath})=>{
//     const history = defaultHistory || createMemoryHistory({
//         initialEntries:[initialPath]
//     });

//     if(onNavigate){
//         history.listen(onNavigate);
//     }
//     console.log("history",history)
//     ReactDOM.render(<App onSelectMenu={onSelectMenu} history={history} />,el);

//     return {
//         onParentNavigate({pathname:nextPathname}){
//             const {pathname}=history.location;
//             console.log(nextPathname)
//             if(pathname!==nextPathname){
//                 history.push(nextPathname);
//             }
//         }
//     }
// };

// ///dev
// if(process.env.NODE_ENV==='development'){
//     const devRoot = document.querySelector('#_menu-dev-root')

//     if(devRoot){
//         mount(devRoot,{defaultHistory:createBrowserHistory()});
//     }
// }

// export {mount};