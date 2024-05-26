import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home'; // Make sure these imports are correct
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ScrollRevealComponent from './ScrollRevealComponent';
import TypedComponent from './TypedComponent';
import Skill from './Skills';
import TimeLine from './Timeline';
import {Helmet} from "react-helmet";

function App() {
  return (
      <div className="App">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Tashini Mendis Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Tashini Mendis Portfolio" />
            </Helmet>
      <Header />
      <Home />
      <About />
      <Skill />
      <TimeLine />
      <Services />
      <Portfolio />
      <Contact />
      <Footer /> 
      <ScrollRevealComponent />
      <TypedComponent />
    </div>
  );
}

export default App;
