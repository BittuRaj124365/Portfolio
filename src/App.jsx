import { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import Introduction from "./Components/Introduction/Introduction";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import ProjectContainer1 from "./Components/Projects/ProjectContainer1";
import ProjectContainer2 from "./Components/Projects/ProjectContainer2";
import ProjectContainer3 from "./Components/Projects/ProjectContainer3";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Sidebutton from "./Components/Sidebuttons/Sidebutton";
import TechBackground from "./BackgroundEffects/TechBackground";
function App() {
  return (
    <>
      <TechBackground />
      <Heading />
      <Sidebutton />
      <Introduction />
      <About />
      <Skills />
      <ProjectContainer1 />
      <ProjectContainer2 />
      <ProjectContainer3 />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
