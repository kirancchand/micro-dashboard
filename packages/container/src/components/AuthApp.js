// import {mount} from 'auth/AuthApp';
// import React,{useRef,useEffect} from 'react';
// import { useNavigate,useLocation} from 'react-router-dom';
// export default({onSignIn})=>{
//     console.log("hello auth")
//     const ref=useRef(null);
//     const navigate=useNavigate()
//     const location = useLocation();
//     useEffect(()=>{
//         const {onParentNavigate}=mount(ref.current,{
//             initialPath:location.pathname,
//             onNavigate:({pathname:nextPathname})=>{
//                 const {pathname}=location;

//                 if(pathname!==nextPathname){
//                     navigate(nextPathname);
//                 }

//             },
//             onSignIn:()=>{
//                 onSignIn();
//             }
//         });

//         const unlisten = onParentNavigate;
//         return () => {
//           if (typeof unlisten === 'function') {
//             unlisten();
//           }
//         };
//     }, [location, navigate]);
//     return <div ref={ref} />;
// }


import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {mount} from 'auth/AuthApp';// Import the mount function from Marketing

const AuthLazy = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (location.pathname !== nextPathname) {
          navigate(nextPathname); // Sync navigation between micro frontend and parent
        }
      },
    });

          // You can use a navigation listener with `useNavigate` and location changes
    const unlisten = () => onParentNavigate(location);
    return () => unlisten(); // Cleanup the listener on unmount
  }, [location,navigate]);

  return <div ref={ref} />;
};

export default AuthLazy;