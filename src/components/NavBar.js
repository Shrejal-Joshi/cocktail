import React ,{  useState } from 'react';
import {Link} from 'react-router-dom';

import {FaAlignRight} from 'react-icons/fa';  
import logo from '../images/logo-light.png';
  

function NavBar ()
{
    const [isOpen, setOpen] = useState(false);
    
    

   function handleNavToogle  () 
    {
      
        setOpen(isOpen  =>!isOpen)
        console.log("isOpen");
        
    }
    
    return (
    <>
    <nav className="nav-bar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <div className="logo-img">
                                <Link to="/" >
                                    <img src= {logo} alt="logo"/>
                                </Link>
                            </div>
                            
                            
                            <button type="button" className="nav-btn"
                                onClick={handleNavToogle}>
                                <FaAlignRight className="nav-icon"  />
                            </button>
                             
                        </div>
                        <ul className={isOpen?"nav-links show-nav" :"nav-links" }>
                            <li>
                                <Link to="/" >Home</Link> </li>
                               <li> <Link to="/categories" >Categories </Link></li>
                               <li><Link to="/aboutus">About Us</Link></li>
                               <li><Link to="/contactus">ContactUs</Link></li>
 
                        </ul>
                    </div>

                </nav>
            
      </>
    );  
    
}

export default NavBar;

