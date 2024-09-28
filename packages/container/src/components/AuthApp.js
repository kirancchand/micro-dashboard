import {mount} from 'auth/AuthApp';
import React,{useRef,useEffect} from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
export default({onSignIn})=>{
    console.log("hello auth")
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

            },
            onSignIn:()=>{
                onSignIn();
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