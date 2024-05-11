import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Content from '../component/Content'
import ContactUs from '../component/ContactUs'
import Testmonial from '../component/Testmonial'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Content />
        <Banner />
        <Testmonial />
        <ContactUs /> 
    </>
  )
}

export default Homepage