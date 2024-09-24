import React , {lazy,Suspense,useState, useEffect} from "react";
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Link as RouterLink ,Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import { GlobalStore } from 'redux-micro-frontend';
import { useSelector,useDispatch } from 'react-redux';
import { SelectMenuFunc } from '../re-redux/global.actions';
import MenuList from "./components/MenuList";
export default({onSelectMenu})=>{
  // const dispatch = useDispatch();
  const globalStore = GlobalStore.Get(false);
  globalStore.RegisterStore('MenuStore', store);
  // globalStore.RegisterGlobalActions("MenuStore", ["SELECTEDMENU"]);
  // globalStore.SubscribeToGlobalState("MenuStore", updateState)
  // function updateState(globalState){
  //   console.log(globalState)
  // }

  const onSelectMenuFunc=(val)=>{
    // dispatch(SelectMenuFunc());
    onSelectMenu(val)
  }
  
  return (<div>
    <Provider store={store}>
    <ul>
      <li  
      onClick={() => onSelectMenuFunc('/pricing')}
      >
        Dashboard
      </li>
      <li  
      onClick={() => onSelectMenuFunc('/dashboard/home')}
      >
        Profile
      </li>
      <li  
      onClick={() => onSelectMenuFunc('/dashboard/page')}
      >
        Settings
      </li>
      <li  
      onClick={() => onSelectMenuFunc('/auth/signin')}
      >
        Auth signin
      </li>
      <MenuList/>
    </ul>
   
    </Provider>
 </div>)
 }


// import React , {lazy,Suspense,useState, useEffect} from "react";
// import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
// import Button from '@material-ui/core/Button';
// import { Link as RouterLink ,Switch, Route, Router } from 'react-router-dom';
// export default({onSelectMenu,history})=>{

//     return (<div>


// <Router history={history}>
//                 <Switch>
                    
//                 <ul>
//   <li  
//   onClick={() => onSelectMenu('/pricing')}
//   >
//     Dashboard
//   </li>
//   <li  
//   onClick={() => onSelectMenu('/dashboard/home')}
//   >
//     Profile
//   </li>
//   <li  
//   onClick={() => onSelectMenu('/dashboard/page')}
//   >
//     Settings
//   </li>
//   <li  
//   onClick={() => onSelectMenu('/auth/signin')}
//   >
//     Auth signin
//   </li>
// </ul>
            
// {/* <Nav vertical>
//           <NavItem>
         
//             <NavLink 
//             // href="/pricing" 
//             onClick={() => onSelectMenu('/pricing')}
//             >Dashboard</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink onClick={() => onSelectMenu('/dashboard/home')}>Profile</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink onClick={() => onSelectMenu('/dashboard/page')}>Settings</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink onClick={() => onSelectMenu('/auth/signin')}>Auth signin</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">Logout</NavLink>
//           </NavItem>
//         </Nav> */}
//                   </Switch>
//               </Router>
//     </div>)
// }