import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Slide1 from '../images/slide1.jpg';
import Slide2 from '../images/slide2.jpg';
import Slide3 from '../images/slider3.jpg';
import PopularDrinks from './HomeAllComponents/PopularDrinks';
import VisitingMenu from './HomeAllComponents/VisitingMenu';





function Home() {

  
  const images = [
      Slide1,Slide2,Slide3
  ];
  
  const [index, setIndex] = useState(0);
  const [currImage, setCurrImage] = useState(images[index]);

 
  
      useEffect(() => {
          setCurrImage(images[index])
      }, [index])

  useEffect(() => {
      const interval = setTimeout(() => {
          setIndex(index === images.length - 1 ? 0 : index + 1)       
      }, 2000);
  }, [currImage])

  console.log(currImage);
 
  return (
    <>
    <div className="main-home-container">
     <div className="nav-bar-container" style={{'backgroundImage' : 'url(' + currImage + ')'}}>
       
        <NavBar />
        <div className="home-container">
        <h6>Exclusive Service</h6>
        <h1>Cocktail stage evenings</h1>

     </div>
     </div>
     </div>

     <div>
     
     <VisitingMenu />
     </div>
     <div className="special-tag-container">
         <h5>This week is special</h5>
         <h1>We recommend</h1>

       </div>
    <div>
   

        <PopularDrinks/>
    </div>    
    </>
  );
}

export default Home;