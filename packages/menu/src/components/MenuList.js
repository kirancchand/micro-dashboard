import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { SelectMenuFunc } from '../../re-redux/global.actions';
import { GlobalStore } from 'redux-micro-frontend';
import { menujson } from './MenuConfig';
import '../../css/sidebaricops.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faShoppingCart, faGem, faChartLine, faGlobe, faBook, faCalendar, faFolder, faCaretDown } from '@fortawesome/free-solid-svg-icons';
const MenuList = () => {
  const dispatch = useDispatch();
  const globalStore = GlobalStore.Get(false);
  const onSelectMenuFunc=(val)=>{

      // dispatch(SelectMenuFunc(val));

      globalStore.DispatchAction("MenuStore",SelectMenuFunc(val));
  }

  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const toggleMenu = (index,menu) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };
  return (<div>
      <li onClick={() => onSelectMenuFunc('/pricing')}>Menulist</li>
      <div className="sidebar">
            {menujson.menus.map((menu, index) => (
              <div key={index} className="menu-container">
                <div
                  className={`menu-item ${activeMenuIndex === index ? 'active' : ''}`}
                  onClick={() => toggleMenu(index,menu)}
                >
                  <FontAwesomeIcon icon={
                    menu.icon === 'fa fa-tachometer-alt' ? faTachometerAlt :
                    menu.icon === 'fa fa-shopping-cart' ? faShoppingCart :
                    menu.icon === 'far fa-gem' ? faGem :
                    menu.icon === 'fa fa-chart-line' ? faChartLine :
                    menu.icon === 'fa fa-globe' ? faGlobe :
                    menu.icon === 'fa fa-book' ? faBook :
                    menu.icon === 'fa fa-calendar' ? faCalendar :
                    menu.icon === 'fa fa-folder' ? faFolder :
                    faFolder
                  } style={{ marginRight: '10px' }} />
                  {/* {console.log(menu.icon)} */}
                   {/* <FontAwesomeIcon icon={menu.icon} style={{ marginRight: '10px' }} /> */}
                  {menu.title}
                  {menu.submenus && (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className={`arrow ${activeMenuIndex === index ? 'rotate' : ''}`}
                      style={{ marginLeft: 'auto' }} 
                    />
                  )}
                </div>

                {menu.submenus && (
                  <div className={`submenu ${activeMenuIndex === index ? 'expanded' : ''}`}>
                    {menu.submenus.map((submenu, subIndex) => (
                      <div key={subIndex} className="submenu-item" onClick={() => onSelectMenuFunc(submenu.path)}>
                        {submenu.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


  )
}

export default MenuList;