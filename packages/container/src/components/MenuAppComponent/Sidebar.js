import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
// import './Sidebar.css'; // Add custom styles here
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
const Sidebar = ({onSelect}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onSelectFunc=(val)=>{
    onSelect(val)
    console.log("Sidebar",val)
  }
  return (
    <div 
      // className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}
      >
      <Button color="primary" onClick={toggleSidebar}>
        {isOpen ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse isOpen={isOpen}>
        <Nav vertical>
          <NavItem>
          <Button
            color="primary"
            variant="outlined"
            // className={classes.link}
            component={RouterLink}
            to={'/pricing'}
            // onClick={onClick}
          >
            Pricing
          </Button>
            <NavLink 
            href="/pricing" 
            // onClick={() => onSelectFunc('pricing')}
            >Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Settings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  );
};

export default Sidebar;
