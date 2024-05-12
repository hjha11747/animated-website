import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Content from '../component/Content'
import ContactUs from '../component/ContactUs'
import Testmonial from '../component/Testmonial'
import Details from '../component/Details'
import Footer from '../component/Footer'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Content />
        <Banner />
        <Details />
        <Testmonial />
        <ContactUs /> 
        <Footer />

    </>
  )
}

export default Homepage