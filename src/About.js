import React from 'react';
import aboutImage from './images/About.png';
import Skill from './Skills';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
      <img src={aboutImage} alt="About Me" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>
        Welcome to my portfolio! I'm passionate about crafting stunning and user-friendly websites. With expertise in front-end development using React, and back-end development using Node.js and Firebase, I bring projects to life seamlessly. I also excel in mobile app development with React Native and Flutter. Proficient in managing MySQL, MsSQL, and MongoDB databases, I ensure robust functionality across all platforms. Let's build something amazing together!
        </p>
      </div>
      
    </section>
  );
};

export default About;