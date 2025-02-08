import { useState } from 'react'
import { NavBar2 } from './components/NavBar2'
import { Hero } from './components/Hero'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
// import { Section3 } from './components/Section3'
import { HandBags } from './components/HandBags'
import { Services } from './components/Services'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'




function App() {
 

  return (
    <>
      <NavBar2 />
      <Hero />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      <HandBags />
      <Services />
      <Footer />
      <Footer2 />

    </>
  )
}

export default App
