import React from 'react';
import logo from '../images/logo-light.png';
import { FaClock } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";





function Footer() {
  return (
    <>

        

        <div className="footer-container">

        <div className="footer">

        

          <div className="address-container">
            <img src={logo} alt="logo" />

              <h6>On the rocks for a perfect evening</h6>
              <p><FaClock /> 
                  Monday-Sun 9:00am - 9:00pm
              </p>
              <p><FaSearchLocation /> 
                  1116, USA
              </p>
          </div>

          <div className="categories-title-container">

              <h2>Categories</h2>
                <p>Ordinay Drink</p>
                <p>Alcoholic</p>
                <p>Cocktails</p>
                <p>Cocktail Glasses</p>
                <p>Champange Flute</p>
              
          </div>
          <div className="opening-hrs-container">
              
              <h1>Opening hours</h1>
              <ul>
                <li>Monday-Friday :  4:00 pm to 1:00 pm</li>
                <li>Saturday : 4:00 pm to 3:00 pm </li>
                <li>Sunday : 4:00 pm to 2:00 pm</li>
              </ul>
         </div>
            
         </div>
        </div>
     
    </>
  );
}

export default Footer;