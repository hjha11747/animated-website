import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link  } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {

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
      delay:0.3
    })
    .from(".center-part1 p",{
      x:-100,
      opacity:0,
      duration:0.3,
      delay:0.3
    })
    .from(".center-part1 button",{
      opacity:0,
      duration:0.2
    })
    .from(".center-part2 img",{
      y:400,
      opacity:0,
      duration:1,
      rotateZ:360,
    })

    .from(".section1bottom",{
      opacity:0,
      y:30,
      duration:0.6,
      stagger:0.2
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
  

  return (
    <>
    <nav className=' bg-gray-200 flex justify-between items-center py-2 px-12 sticky top-0 z-[1] overflow-x-hidden'>
        <h1 className=' text-[40px] font-bold '><i className= " px-1" class="ri-shining-2-fill"></i>WizardZ</h1>
        <div className=' flex justify-center items-center gap-11 font-semibold '>
                <Link to="/">Home</Link>
                <Link onClick={scrollToServices}>Services</Link>
                <Link onClick={scrollToBanner}>Blog</Link>
                <Link onClick={scrollToProcess}>Process</Link>
                <Link onClick={scrollToTestimonial}>Testimonial</Link>
                <Link onClick={scrollToContactUs} >Contact Us</Link>
                <Link to="https://www.instagram.com/j_harsh_20/" className='py-[12px] px-3 rounded-md bg-green-500 font-semibold' >Request Service</Link>
        </div>
    </nav>

    <div className='  py-9 px-16  h-[72%] w-full flex overflow-x-hidden'>
            <div className=' mt-16 center-part1 h-full w-[45%]'>
                <h1 className=' text-[54px] font-medium leading-[1.3] '> <i class="ri-hashtag font-bold"></i>Unleash the Power learning the of Social Media with Us</h1>
                <p className=' text-[17px] py-6 w-[90%]'>Our digital marketing agency helps businesses and influencer grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button className=' bg-black text-white font-semibold rounded-md px-5 py-2 border- text-[20px]' onClick={scrollToServices}> Dive in now</button>
            </div>
            <div className='center-part2 w-[55%] '>
                <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
            </div>
        </div>
        <div className=' section1bottom flex justify-between items-center px-[160px]'>
        <img height={40} width={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXVtQmcRMMd3AsayKOf1dK-iFQtj4YCVJvTtVKO1t_g&s" alt="" />
        <img height={40} width={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqhKxG8EsHoUl0GAv3_l4M9T_L0mj8bm8zH4ZmyT_vA&s" alt="" />
            <img height={40} width={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSB0qGIAKJEDEYUuMGyJ1iwDw7x0eokFWfGdjFbFDK&s" alt="" />
            <img height={40} width={80} src="https://m.media-amazon.com/images/I/616QXs8yg0L.png" alt="" />
            <img height={40} width={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmuh1rNVX0jSES9xGj2FloaT0VPvl_hP3DUVyR70k8g&s" alt="" />
            <img height={40} width={80} src="https://www.cnet.com/a/img/resize/7ab7ed60294f2b313ab1b7dfcda06083fd65611b/hub/2013/05/16/c1ba1707-f07b-11e2-8c7c-d4ae52e62bcc/youtubelogo.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
        </div>

    </>
  )
}

export default Navbar
