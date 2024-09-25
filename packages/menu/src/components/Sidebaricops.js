import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faShoppingCart, faGem, faChartLine, faGlobe, faBook, faCalendar, faFolder, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { menujson } from './MenuConfig';
import './sidebaricops.css'; 

function Sidebaricops() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      {menujson.menus.map((menu, index) => (
        <div key={index} className="menu-container">
          <div
            className={`menu-item ${activeMenuIndex === index ? 'active' : ''}`}
            onClick={() => toggleMenu(index)}
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
              null
            } style={{ marginRight: '10px' }} />
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
                <div key={subIndex} className="submenu-item">
                  {submenu.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebaricops;
