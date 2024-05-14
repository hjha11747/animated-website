import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import gsap from 'gsap'
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("nav", {
      y: -30,
      duration: 0.1,
      delay: 1,
      opacity: 0,
      stagger: 0.2
    })
      .from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.3,
        delay: 0.3
      })
      .from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.3,
        delay: 0.3
      })
      .from(".center-part1 button", {
        opacity: 0,
        duration: 0.2
      })
      .from(".center-part2 img", {
        y: 400,
        opacity: 0,
        duration: 1,
        rotateZ: 360,
      })

      .from(".section1bottom", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2
      })

  });

  const scrollToBanner = () => {
    window.scrollTo({
      top: document.getElementById('Blog').offsetTop - (window.innerHeight * 0.2),
      behavior: 'smooth'
    });
  };

  const scrollToTestimonial = () => {
    window.scrollTo({
      top: document.getElementById('testimonial').offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollToContactUs = () => {
    window.scrollTo({
      top: document.getElementById('contactus').offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollToAboutUs = () => {
    window.scrollTo({
      top:document.getElementById('aboutus').offsetTop,
      behavior: 'smooth'
    });
  };
  

  const scrollToServices = () => {
    window.scrollTo({
      top: document.getElementById('services').offsetTop - (window.innerHeight * 0.05),
      behavior: 'smooth'
    });
  };

  const scrollToProcess = () => {
    window.scrollTo({
      top: document.getElementById('process').offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: document.getElementById('top').offsetTop,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <nav className='bg-gray-200 flex justify-between items-center py-2 px-12 sticky  z-10 top-0 max-lg:px-8 max-sm:py-5 '>
        <NavLink onClick={scrollToTop} className='text-[40px] font-bold max-lg:text-[30px] max-sm:text-[25px] max-small:text-[22px] max-xs:text-[18px] ' id='top' activeClassName='active'><i class="ri-menu-search-line"></i>ElevateEdge</NavLink>
        <div className='flex justify-center items-center gap-11 font-semibold max-xl:gap-6 max-medium:gap-4 max-tab:hidden'>
          <NavLink activeClassName="active" className="hover:text-green-600" onClick={scrollToTop}>Home</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600" onClick={scrollToAboutUs}>About Us</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600" onClick={scrollToServices}>Services</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600" onClick={scrollToBanner}>Blog</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600" onClick={scrollToProcess}>Process</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600" onClick={scrollToTestimonial}>Testimonial</NavLink>
          <Link onClick={scrollToContactUs} className='py-[12px] px-3 rounded-md bg-lime-400 font-semibold'>Request Service</Link>
        </div>

        <button className='tab:hidden' onClick={toggleMenu}>{isMenuOpen ? <IoMdClose className='inline-block' /> : <TiThMenu />}</button>

      </nav>

      {isMenuOpen && (
        <div className='flex flex-col p-3 bg-gray-200 font-medium tab:hidden sticky'>
          <NavLink activeClassName="active" className="hover:text-green-600 hover:bg-gray-300 p-2 rounded-lg" onClick={scrollToTop}>Home</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600 hover:bg-gray-300 p-2 rounded-lg" onClick={scrollToAboutUs}>About Us</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600 hover:bg-gray-300 p-2 rounded-lg" onClick={scrollToServices}>Services</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600 hover:bg-gray-300 p-2 rounded-lg" onClick={scrollToBanner}>Blog</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600 hover:bg-gray-300 p-2 rounded-lg" onClick={scrollToProcess}>Process</NavLink>
          <NavLink activeClassName="active" className="hover:text-green-600 hover:bg-gray-300 p-2 rounded-lg" onClick={scrollToTestimonial}>Testimonial</NavLink>
          <NavLink onClick={scrollToContactUs} className='py-[12px] px-3 rounded-md bg-lime-400 font-semibold w-[32%] max-small:w-[36%] max-xs:w-[58%] text-center'>Request Service</NavLink>
        </div>
      )}

      <div className='  py-9 px-16  h-[72%] w-full flex overflow-x-hidden max-lg:px-10   max-sm:px-4    max-small:flex-col'>
        <div className=' mt-16 center-part1 h-full w-[45%]  max-xl:w-[50%] max-xl:mt-10   max-md:mt-6  max-sm:mt-0   max-small:w-full'>
          <h1 className=' text-[54px] font-medium leading-[1.3]    max-xl:text-[45px]   max-lg:text-[32px]   max-md:text-[24px] max-xl:leading-[1.1]  max-small:text-[32px]'> <i class="ri-hashtag font-bold"></i>Unleash the Power of learning the of Social Media with Us</h1>
          <p className=' text-[17px] py-6 w-[90%]  max-xl:text-[15px]  max-lg:text-[13px]  max-xl:py-3 max-small:w-[90%]  max-small:py-6 '>Our digital marketing agency helps businesses and influencer grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className=' bg-black text-white font-semibold rounded-md px-5 py-2 border- text-[20px]  max-xl:text-[17px]' onClick={scrollToAboutUs}> Dive in now</button>
        </div>
        <div className='center-part2 w-[55%]   max-xl:w-[50%]   max-small:w-[100%]  max-small:pt-5 '>
          <img className=' max-xl:w-[520px] max-xl:m-auto   max-sm:h-[300px]   ' src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
        </div>
      </div>
      <div className=' section1bottom flex justify-between items-center px-[160px] max-lg:px-[100px]  max-md:px-[60px] max-sm:px-8  max-small:px-2   '>
        <img height={40} width={80} className='max-lg:h-10 max-lg:w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXVtQmcRMMd3AsayKOf1dK-iFQtj4YCVJvTtVKO1t_g&s" alt="" />
        <img height={40} width={80} className='max-lg:h-12 max-lg:w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqhKxG8EsHoUl0GAv3_l4M9T_L0mj8bm8zH4ZmyT_vA&s" alt="" />
        <img height={40} width={80} className='max-lg:h-8 max-lg:w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSB0qGIAKJEDEYUuMGyJ1iwDw7x0eokFWfGdjFbFDK&s" alt="" />
        <img height={40} width={80} className='max-lg:h-8 max-lg:w-13' src="https://m.media-amazon.com/images/I/616QXs8yg0L.png" alt="" />
        <img height={40} width={80} className=' max-sm:hidden max-lg:h-10 max-lg:w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmuh1rNVX0jSES9xGj2FloaT0VPvl_hP3DUVyR70k8g&s" alt="" />
        <img height={40} width={80} className='max-lg:h-8 max-lg:w-10' src="https://www.cnet.com/a/img/resize/7ab7ed60294f2b313ab1b7dfcda06083fd65611b/hub/2013/05/16/c1ba1707-f07b-11e2-8c7c-d4ae52e62bcc/youtubelogo.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
      </div>

    </>
  )
}

export default Navbar
