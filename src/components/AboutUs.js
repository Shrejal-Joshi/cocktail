import React from 'react';
import barImg from '../images/barImg.jpg';
import { YoutubePlayer } from 'reactjs-media';

function AboutUs() {
  return (
    <>
    <div className="about-container">

       <div className="aboutus-container">

       </div>

        <div className="story-container">
      
          <div className="stroy-image-container">
            <img src={barImg} alt="barAbout"/>
            

          </div>
        

       <div className="story-info-container">
              <h1>Our Story</h1>
              <p>If you take reservations, make it easy to do on your website instead of sending your customers to the phone. Old Lady Gang in Atlanta, GA puts a reservations form right at the center of their homepage. This way, their guests can easily see what times are available without 
                having to talk to a host that's trying to hear them over the din of the restaurant.</p>
          </div>

      </div>

    <div className="video-container">

    <YoutubePlayer
                src="https://www.youtube.com/watch?v=ZUpXDU-KopY" // Reqiured
                width={1800}
                height={600}
            />
  
    </div>
     

    </div>

    </>
  );
}

export default AboutUs;