import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import Introduction from "./Components/Introduction/Introduction";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import ProjectContainer1 from "./Components/Projects/ProjectContainer1";
import ProjectContainer2 from "./Components/Projects/ProjectContainer2";
import ProjectContainer3 from "./Components/Projects/ProjectContainer3";
function App() {
  return (
    <>
      <Heading />
      <Introduction />
      <About />
      <Skills />
      <ProjectContainer1 />
      <ProjectContainer2/>
      <ProjectContainer3/>
    </>
  );
}

export default App;
