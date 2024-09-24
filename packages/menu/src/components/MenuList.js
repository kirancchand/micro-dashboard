import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { SelectMenuFunc } from '../../re-redux/global.actions';
const MenuList = () => {
  const dispatch = useDispatch();
  const onSelectMenuFunc=(val)=>{
      dispatch(SelectMenuFunc(val));
  }
  return (
    <li  
    onClick={() => onSelectMenuFunc('/pricing')}
    >
      Menulist
    </li>
  )
}

export default MenuList;