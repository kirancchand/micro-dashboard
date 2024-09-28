// import {mount} from 'menu/MenuApp';
// import React,{useRef,useEffect} from 'react';
// import { useHistory } from 'react-router-dom';
// export default({onSelectMenu})=>{
//     console.log("hello menu")
//     const ref=useRef(null);
//     const history=useHistory()
//     useEffect(()=>{
//         const {onParentNavigate}=mount(ref.current,{
//             initialPath:history.location.pathname,
//             onNavigate:({pathname:nextPathname})=>{
//                 const {pathname}=history.location;

//                 if(pathname!==nextPathname){
//                     history.push(nextPathname);
//                 }

//             },
//             onSelectMenu:(val)=>{
//                 console.log("Menu app",val)
//                 onSelectMenu(val);
//             }
//         });

//         history.listen(onParentNavigate);
//     });
//     return <div ref={ref} />;
// }


import {mount} from 'menu/MenuApp';
import React,{useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export default({onSelectMenu})=>{
    console.log("hello menu")
    const ref=useRef(null);
    // const history=useHistory()
    useEffect(()=>{
        mount(ref.current,{
            onSelectMenu:(val)=>{
                console.log("Menu app",val)
                onSelectMenu(val);
            }
        });

    });
    return <div ref={ref} />;
}

