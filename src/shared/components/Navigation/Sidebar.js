
import { AuthContext } from '../../context/auth-context';
import React, { useContext } from 'react';

import  '../../../css/style.css';
const Sidebar = props => {
const srcHome = `https://svgsilh.com/svg/309113.svg`
const src = 'https://png.pngtree.com/png-clipart/20190620/original/pngtree-vector-bar-chart-icon-png-image_4022070.jpg'
const auth = useContext(AuthContext);

  return (

    <div class="sidebar">
    <ul class="side-nav">
    <li class="side-nav__item side-nav__item--active">
                            <a href="/" class="side-nav__link">
                                <span>   <div   class="weather-icon-nav1"> <i class="fas fa-home"></i></div>&nbsp;&nbsp; Home</span>
                            </a>
                        </li>
                        {auth.isLoggedIn && (   <li class="side-nav__item">
                            <a href="Balnce" class="side-nav__link">
                                
                                <span> <div  class="weather-icon-nav"  ><i class="fas fa-coins"></i></div>&nbsp;&nbsp;&nbsp;Budget</span>
                               
                               
                            </a>
                        </li>  )}
                        {!auth.isLoggedIn && ( <li class="side-nav__item">
                            <a href="/auth" class="side-nav__link">
                                
                                <span> <div   class="weather-icon-nav"  ><i class="fas fa-user-lock"></i></div>&nbsp;&nbsp;&nbsp;login</span>
                               
                               
                            </a>
                        </li>)}



                        {auth.isLoggedIn && ( <li class="side-nav__item">
                      <a href="/" class="side-nav__link" onClick={auth.logout}>
                      <div class="weather-icon-nav2">
                                  
                               </div>    <span className ="logut">   <i class="fas fa-sign-out-alt"></i>   &nbsp;&nbsp; LOGOUT</span>
                            </a>
                        </li> )}

                        </ul>
{/*     <MainNavigation /> */}
        </div>




  );
};

export default Sidebar;
