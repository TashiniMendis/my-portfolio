// Service.js

import React from 'react';
import Image1 from './images/Image1.webp';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.webp';

const Service = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Blogs</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
        <img src={Image1} alt="portfolioImage5" width={200}/><br></br><br></br>
          <h3>Easy way to Code a Web Page</h3>
           <p>
          The article covers essential HTML and CSS concepts, including structuring content with HTML tags and styling with CSS
          </p> 
          <a href="https://medium.com/@tashinihansika123/easy-way-to-code-a-web-page-26cccf39f212" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
        <img src={Image3} alt="portfolioImage5" width={300}/><br></br><br></br>
          <h3>A Comparative Exploration of Image Preprocessing in Python and C++</h3><br></br><br></br>
          {/* <p>
          The article covers key image processing steps, comparing the implementation details and performance of both languages.
          </p> */}
          <a href="https://medium.com/@tashinihansika123/a-comparative-exploration-of-image-preprocessing-in-python-and-c-324cd24509d4" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
        <img src={Image2} alt="portfolioImage5" width={250}/><br></br><br></br >
          <h3>Interfacing LCD 16x2 with ATMEGA32 AVR Microcontroller in 4-bit mode</h3><br></br><br></br>
          {/* <p>
          The blog covers the essential hardware connections, detailing how the LCD's data and control lines are connected to the microcontroller.
          </p> */}
          <a href="https://medium.com/@tashinihansika123/interfacing-lcd-16x2-with-atmega32-avr-microcontroller-in-4-bit-mode-45fae57341e7" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
