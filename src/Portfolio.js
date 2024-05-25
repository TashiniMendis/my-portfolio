// Portfolio.js

import React from 'react';
import portfolioImage1 from './images/portfolio1.jpg';
import portfolioImage2 from './images/portfolio2.jpg';
import portfolioImage3 from './images/portfolio3.jpg';
import portfolioImage4 from './images/portfolio4.jpg';
import portfolioImage5 from './images/portfolio5.jpg';
import portfolioImage6 from './images/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={portfolioImage1} alt="portfolioImage1" />
          <div className="portfolio-layer">
            <h4>Cleaner Connect Application</h4>
            <p>
              A comprehensive cleaners management system with web, tablet, and mobile
              apps. Utilizes Firebase for messaging and notifications.
            </p>
            <p className="tl-duration">React | Flutter | Firebase</p>

          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolioImage2} alt="portfolioImage2" />
          <div className="portfolio-layer">
            <h4>TPL Petty Cash Application</h4>
            <p>
              A unified solution comprising a web app for onsite users and a mobile app for
              field users streamlining petty cash processes, integrating seamlessly with SAP
              for enhanced workflow efficiency
            </p>
            <p className="tl-duration">React native | SQLite | Firebase</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolioImage3} alt="portfolioImage3" />
          <div className="portfolio-layer">
            <h4>Portfolio Website</h4>
            <p>
            I created a dynamic portfolio website showcasing my skills, projects, and achievements, reflecting my professional identity and expertise succinctly
            </p>
            <p className="tl-duration">React | Firebase</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolioImage4} alt="portfolioImage4" />
          <div className="portfolio-layer">
            <h4>Doctor App</h4>
            <p>
            Simplifying patient management with features like patient lists, profiles,
 registrations, and notifications. Streamlining healthcare for efficient and
 comprehensive medical practice.
            </p>
            <p className="tl-duration">Flutter | Firebase | Nodejs</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolioImage5} alt="portfolioImage5" />
          <div className="portfolio-layer">
            <h4> FIT SIXES Official Mobile App</h4>
            <p>
            'Fit Sixes' official application is a mobile development initiative that aims to make
 fitness easy for everyone as part of the large cricket fiesta organized by the
 Faculty of Information Technology at the University of Moratuwa
            </p>
            <p className="tl-duration">React Native | Firebase | Nodejs</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolioImage6} alt="portfolioImage6" />
          <div className="portfolio-layer">
            <h4>Socially</h4>
            <p>
            A user-friendly social media affiliate marketing platform for non-tech users.
 Mobile and web apps empower advertisers to create campaigns, while
 publishers earn commissions by sharing and promoting creatives.
            </p>
            <p className="tl-duration">React | MySQL | Nestjs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
