import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
const HeadBar = props => {
  const auth = useContext(AuthContext);
 
  let name =auth.name
  return (
<div class="_headBar">
          
   <div class="user-nav__user">
<span class="heading-primary--HeadBar">  BALANCE</span>
                        
                       <span class="user-nav__user-name">{}</span>
                    </div>
                    </div>
  );
};

export default HeadBar;
