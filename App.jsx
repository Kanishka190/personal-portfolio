import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Companies from './Components/Companies'

const App = () => {
  return (
    <div className='bg-[#0c0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Companies/>
      <Contact/>
    </div>
  )
}

export default App