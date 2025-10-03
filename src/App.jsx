import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/Heading/Heading'
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
function App() {

  return (
    <>
      <Heading/>
      <Introduction/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
