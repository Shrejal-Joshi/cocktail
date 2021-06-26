import React from 'react';
import cafeBar from '../../images/barImg.jpg';

function VisitingMenu() {
  return (
    <>
       <div className="visiting-main-container">

         <div className="visiting-hrs-container">
              <p>Visit a bar</p>
              <h1>Open hours</h1>
              <ul>
                <li>Monday-Friday :  4:00 pm to 1:00 pm</li>
                <li>Saturday : 4:00 pm to 3:00 pm </li>
                <li>Sunday : 4:00 pm to 2:00 pm</li>
              </ul>
         </div>
         <div className="visiting-bar-container">
           <img src={cafeBar} />

        </div>
         <div className="visiting-offers-container">

         <p>The best offer</p>
              <h1>Happy Hours</h1>
              <ul>
                <li>Monday-Friday :  4:00 pm to 1:00 pm</li>
                <li>20% off all wine by the glasses 15% off all cocktails</li>
                <li>20% off all selected craft beer 15% off all spirits</li>
              </ul>
              {/* <h6>Monday-Friday :  4:00 pm to 1:00 pm</h6>
              <p className="offer">20% off all wine by the glasses 15% off all cocktails</p>
              <p className="offer"></p> */}

        </div>

       </div>
      
    </>
  );
}

export default VisitingMenu;