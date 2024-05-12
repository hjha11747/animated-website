import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(ScrollTrigger);

const Banner = () => {

  useGSAP(() => {
    let tl3 = gsap.timeline();
    tl3.from(".banner-details h1", {
      x:-100,
      opacity:0,
      duration:1,
      delay:1,
    })

    .from(".banner-details p", {
      x:-100,
      opacity:0,
      duration:1,
      delay:1,
    })

    .from(".banner-details button", {
      y:30,
      opacity:0,
      duration:2,
      delay:1,
    })

    .from(".banner-img img", {
      rotateY:720,
      opacity:0,
      duration:10,
      delay:1,
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
    <div className=' banner-details bg-gray-200 w-[90%] h-[300px] m-auto px-20 rounded-3xl flex items-center justify-between'>
        <div className=' flex items-start flex-col justify-between h-[250px] w-[50%]'>
            <h1 className=' text-[30px] font-semibold'>Lets make things happen</h1>
            <p className='text-[17px]'>Our agency specializes in providing a wide range of services including social media management, digital marketing, brand collabs, content strategy, video editing, advertising campaigns, and social media optimization.</p>
            <button className=' bg-black text-white text-[20px] p-3 px-4 rounded-md mt-6'>Get your free proposal</button>
        </div>
        <div className='banner-img'>
            <img width={350} className='rounded-xl' src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/6491de708cef894980a39679_IllustrationCTA.svg" alt="" />
        </div>
    </div>
  )
}

export default Banner