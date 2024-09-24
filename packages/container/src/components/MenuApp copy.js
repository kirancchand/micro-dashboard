import {mount} from 'menu/MenuApp';
import React,{useRef,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
export default({onSelect})=>{
    const ref=useRef(null);
    const history=useHistory()
    useEffect(()=>{
        const {onParentNavigate}=mount(ref.current,{
            initialPath:history.location.pathname,
            onNavigate:({pathname:nextPathname})=>{
                const {pathname}=history.location;

                if(pathname!==nextPathname){
                    history.push(nextPathname);
                }

            },
            onSelect:(val)=>{
                console.log("Menu app",val)
                onSelect(val);
            }
        });

        history.listen(onParentNavigate);
    });
    return <div ref={ref} />;
}

