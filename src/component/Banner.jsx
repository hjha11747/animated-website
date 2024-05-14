import React from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(ScrollTrigger);
const Banner = () => {

  useGSAP(() => {
    let tl3 = gsap.timeline();
    tl3.from(".banner-details h1", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 1,
    })

      .from(".banner-details p", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 1,
      })

      .from(".banner-details .link", {
        y: 30,
        opacity: 0,
        duration: 2,
        delay: 1,
      })

      .from(".banner-img img", {
        rotateY: 720,
        opacity: 0,
        duration: 10,
        delay: 1,
      })

    ScrollTrigger.create({
      trigger: '.banner-details',
      start: 'top 100%%',
      end: 'top 40%',
      scrub: 2,
      markers: false,
      animation: tl3,
    });
  })

  return (
    <div className=' banner-details bg-gray-200 w-[90%] h-[300px] m-auto px-20 rounded-3xl flex justify-between  max-lg:px-8  max-md:p-6  max-sm:flex-col  max-sm:h-[520px]  ' id='Blog'>
      <div className=' flex items-start flex-col justify-between h-[250px] w-[50%] max-sm:w-full max-sm:h-[150px] pt-6 '>
        <h1 className=' text-[30px] font-semibold  max-lg:text-2xl max-md:text-xl'>Lets make things happen</h1>
        <p className='text-[17px]  max-lg:text-[14px]  max-md:text-[12px]  '>Our agency specializes in providing a wide range of services including social media management, digital marketing.Contact us today to learn more about how our digital marketing services can help your business grow and succeed online. </p>
        <Link to="https://www.instagram.com/j_harsh_20/" className=' bg-black text-white text-[20px] p-3 px-4 rounded-md mt-6  max-lg:text-[15px]  max-md:text-[13px] link'>Get your free proposal</Link>
      </div>
      <div className='banner-img'>
        <img width={350} className='rounded-xl max-sm:mx-auto  max-lg:w-[310px] max-md:w-[263px] ' src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/6491de708cef894980a39679_IllustrationCTA.svg" alt="" />
      </div>
    </div>
  )
}

export default Banner