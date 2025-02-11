import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#0c0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App