// import {mount} from 'marketing/MarketingApp';
// import React,{useRef,useEffect} from 'react';
// import { useNavigate,useLocation } from 'react-router-dom';
// export default()=>{
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

// import React, { useRef, useEffect } from 'react';
// import { mount } from 'marketing/MarketingApp'; // Import the mount function from Marketing
// import { useNavigate, useLocation } from 'react-router-dom';

// const MarketingLazy = () => {
//   const ref = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const { onParentNavigate } = mount(ref.current, {
//       initialPath: location.pathname, // Pass the current path as initialPath
//       onNavigate: ({ pathname: nextPathname }) => {
//         const { pathname } = location;

//         if (pathname !== nextPathname) {
//           navigate(nextPathname);
//         }
//       }
//     });

//     // Sync when the parent route changes
//     return () => {
//       onParentNavigate && onParentNavigate(location);
//     };
//   }, [location, navigate]);

//   return <div ref={ref} />;
// };

// export default MarketingLazy;


// import React, { useEffect, useRef } from 'react';
// import { mount } from 'marketing/MarketingApp'; // Adjust this import if necessary
// import { useLocation } from 'react-router-dom';

// const MarketingLazy = () => {
//   const ref = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const { onParentNavigate } = mount(ref.current, {
//       initialPath: location.pathname, // Pass the current path as initialPath
//       onNavigate: ({ pathname: nextPathname }) => {
//         const { pathname } = location;
//         if (pathname !== nextPathname) {
//           navigate(nextPathname);
//         }
//       }
//     });

//     // Sync when the parent route changes
//     return () => {
//       onParentNavigate && onParentNavigate(location);
//     };
//   }, [location]);

//   console.log('MarketingLazy rendered, current path:', location.pathname); // Debug log

//   return <div ref={ref} />;
// };

// export default MarketingLazy;

// import React, { useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { mount } from 'marketing/MarketingApp'; // Import the mount function from Marketing

// const MarketingLazy = () => {
//   const ref = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   useEffect(() => {
//     const { onParentNavigate } = mount(ref.current, {
//       initialPath: location.pathname,

//       onNavigate: ({ pathname: nextPathname }) => {
//         console.log("location",location)
//         console.log("nextPathname",nextPathname)
//         if (location.pathname !== nextPathname) {
//           console.log(location)
//           navigate(nextPathname); // Sync navigation between micro frontend and parent
//         }
//       },
//     });

//     return () => {
//       // Ensure synchronization when the component unmounts
//       if (onParentNavigate) {
//         onParentNavigate(location);
//       }
//     };
//   }, [location]);

//   return <div ref={ref} />;
// };

// export default MarketingLazy;



// import {mount} from 'marketing/MarketingApp';
// import React,{useRef,useEffect} from 'react';
// import { useLocation,useNavigate } from 'react-router-dom';
// export default()=>{
//     const ref=useRef(null);
//     const location = useLocation();
//     const history = useNavigate();
//     useEffect(()=>{
//         const {onParentNavigate}=mount(ref.current,{
//             initialPath:location.pathname,
//             onNavigate:({pathname:nextPathname})=>{
//                 const {pathname}=history.location;

//                 if(pathname!==nextPathname){
//                     history.push(nextPathname);
//                 }

//             }
//         });
//         const unsubscribe = onParentNavigate({ pathname: location.pathname });
//         return () => {
//           if (unsubscribe) unsubscribe();
//         };

//         // history.listen(onParentNavigate);
//     },[location, onParentNavigate]);
//     return <div ref={ref} />;

    
// }


import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = location;

                if (pathname !== nextPathname) {
                  console.log(pathname)
                  console.log(nextPathname)
                    navigate(nextPathname);
                }
            }
        });

        // You can use a navigation listener with `useNavigate` and location changes
        const unlisten = () => onParentNavigate(location);
        return () => unlisten(); // Cleanup the listener on unmount
    }, [location, navigate]);

    return <div ref={ref} />;
};
