import React from 'react';
import homeImage from './images/Home.png';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Tashini Mendis</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Enthusiastic and motivated final year undergraduate, adept at navigating challenges with strong logical thinking. Eager to apply dedication and IT skills to a dynamic role in software engineering.</p>
        <div className="social-media">
          <a href="https://www.facebook.com/tashini.mendis.7"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.linkedin.com/in/tashini-mendis/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/TashiniMendis"><i className='bx bxl-github'></i></a>
          <a href="https://tashinihansika123.medium.com/"><i className='bx bxl-medium'></i></a>
        </div>
        
      </div>
      <div className="home-img">
      <img src={homeImage} alt="Home" />
      </div>
    </section>
  );
};

export default Home;
