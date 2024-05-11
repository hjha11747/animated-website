import { useGSAP } from '@gsap/react'
import React from 'react'
import { NavLink  } from 'react-router-dom'
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
      x:400,
      opacity:0,
      duration:0.3,
    })

    .from(".section1bottom",{
      opacity:0,
      y:30,
      duration:0.6,
      stagger:0.2
  })

  });
  

  return (
    <>
    <nav className=' bg-gray-200 flex justify-between items-center py-2 px-12 sticky top-0 z-[1]'>
        <h1 className=' text-[40px] font-bold '><i className= " px-1" class="ri-shining-2-fill"></i>WizardZ</h1>
        <div className=' flex justify-center items-center gap-11 font-semibold '>
                <NavLink>About Us</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Use Cases</NavLink>
                <NavLink>Pricing</NavLink>
                <button className='py-[15px] px-6 rounded-md bg-transparent font-semibold border border-solid '>Request a Quote</button>
        </div>
    </nav>

    <div className='  py-9 px-16  h-[72%] w-full flex'>
            <div className=' center-part1 h-full w-[45%]'>
                <h1 className=' text-[65px] font-medium leading-[1.3] '>Navigating the digital landspace for success</h1>
                <p className=' text-[17px] py-6 w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem alias, officiis, consequuntur
                    sapiente praesentium et aspernatur at, ipsum quos cumque? Ut tenetur eum cupiditate quis quo veniam
                    blanditiis magnam.</p>
                <button className=' bg-green-500 text-white font-semibold rounded-md px-5 py-2 border-none text-[15px]'>Book A Consultation</button>
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
