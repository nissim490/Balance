import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './Container';
import NavLinks from './NavLinks';

import './MainNavigation.scss';
import '../../../css/style.css'
const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
    
    

     
      <NavLinks/>
    </React.Fragment>
  );
};

export default MainNavigation;
