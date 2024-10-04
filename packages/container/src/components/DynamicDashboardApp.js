import { mount } from 'dynamicdashboard/DynamicDashboardApp';
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

        // You can use a navigation listener with `useNavigate` and location changes
        const unlisten = () => onParentNavigate(location);
        return () => unlisten(); 
    }, [location, navigate]);
    return <div ref={ref} />;
}