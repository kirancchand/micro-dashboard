// import { mount } from 'dashboard/DashboardApp';
// import React, { useRef, useEffect } from 'react';

// export default () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     mount(ref.current);
//   }, []);

//   return <div ref={ref} />;
// };



import { mount } from 'dashboard/DashboardApp';
import React,{useRef,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
export default()=>{
    const ref=useRef(null);
    const navigate=useNavigate()
    const location = useLocation();
    useEffect(()=>{
        const {onParentNavigate}=mount(ref.current,{
            initialPath:location.pathname,
            onNavigate:({pathname:nextPathname})=>{
                const {pathname}=location;

                if(pathname!==nextPathname){
                    navigate(nextPathname);
                }

            }
        });

        const unlisten = onParentNavigate;
        return () => {
          if (typeof unlisten === 'function') {
            unlisten();
          }
        };
    }, [location, navigate]);
    return <div ref={ref} />;
}