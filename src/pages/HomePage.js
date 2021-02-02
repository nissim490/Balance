
import React, { useEffect, useState } from 'react';
import '../sass/main.scss';





const HomePage = () => {


  
 
   
   
  return (
    <React.Fragment>
   <body class="containermy">
   
        <g class="g">
        
        <span class="heading-primary--main">  BA <img src="https://static.thenounproject.com/png/17390-200.png" class="heading_logo"/>ANCE</span>
        </g>

        <div class="realtors">
        <h3 class="heading-3">Top 3 advices</h3>
            <div class="realtors__list">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="User photo" className="user-home__user-photo"/>
                <div class="realtors__details">
                    <h4 class="heading-4 heading-4--light">Erik Feinman</h4>
                    <p class="realtors__sold">Balancing</p>
                </div>

                <img src="https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg" alt="User photo" className="user-home__user-photo"/>
                <div class="realtors__details">
                    <h4 class="heading-4 heading-4--light">Kim Brown</h4>
                    <p class="realtors__sold">Saving</p>
                </div>

                <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" alt="User photo" className="user-home__user-photo"/>
                <div class="realtors__details">
                    <h4 class="heading-4 heading-4--light">Toby Ramsey</h4>
                    <p class="realtors__sold">Forethought</p>
                </div>
            </div>
        </div>
        
        
        </body>
 


                  
   
</React.Fragment>
  );
};

export default HomePage;