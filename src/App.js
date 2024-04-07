import React,{useEffect}from "react";
import "./App.css";
import Header from "./components/headers/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      // Your configuration options here
      // duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <br/>
        <br/>
        <br/>
        <About />
        <Skills />
        <br/>
        <br/>
        <br/>

        <Qualification />
        <Projects />
        
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
