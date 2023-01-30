import React from "react";
import { Element } from "react-scroll";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Header from "./components/Header/Header";
import LSideSocialIcon from "./components/LSideSocialIcon/LSideSocialIcon";
import { Route, Router, Routes } from "react-router";

function App() {
  return (
    // <>
    // <Header/>
    // <LSideSocialIcon/>
    // <Routes>
    //   <Route path="/home"  element={<Home/>}/>
    //   <Route path="/about"  element={<About/>}/>
    //   <Route path="/portfolio" element={<Portfolio/>}/>
    //   <Route path="/skills"  element={<Skills/>}/>
    //   <Route path="/contact"  element={<Contact/>}/>
    // </Routes>
    // </>
    <div className="App">
        <Header />
        <LSideSocialIcon />

        <Element className="section" name="home">
          <Home />
        </Element>
        <Element className="section" name="about">
          <About />
        </Element>
        <Element className="section" name="portfolio">
          <Portfolio />
        </Element>
        <Element className="section" name="skills">
          <Skills />
        </Element>
        <Element className="section" name="contact">
          <Contact />
        </Element>
    </div>
  );
};

export default App;
