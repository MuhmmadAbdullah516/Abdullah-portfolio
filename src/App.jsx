// src/App.jsx
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className="bg-[#050414]">
      {/* <BlurBlob position={{top:'35%',left:'20%'}} size={{width:'30%',height:'40%'}}/> */}
      <div className="absolute inset-0 h-full w-full 
  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
  bg-[length:14px_24px] 
  pointer-events-none 
  z-0"></div>
      
      <div className='relative pt-20'>
        <Navbar />
        <About />
         <Skills/>
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer /> 
      </div>
    </div>
  )
}

export default App
