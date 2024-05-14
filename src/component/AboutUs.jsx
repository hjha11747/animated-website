import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {

    useGSAP(() => {
        let tl6 = gsap.timeline();

        tl6.from(".aboutus", {
            y: 30,
            delay: 1,
            duration: 0.5,
            opacity: 0
        })
        tl6.from(".paragraph", {
            x: -200,
            duration: 1,
            opacity: 0
        })

        ScrollTrigger.create({
            trigger: '.aboutus',
            start: 'top 100%',
            end: 'top 40%',
            scrub: 2,
            markers: false,
            animation: tl6,
        });

    })

    return (
        <>
            <div className='aboutus flex justify-start px-[70px]  max-sm:flex-col max-sm:px-[30px]  pt-20' id='aboutus'>
                <h3 className=' bg-lime-400 text-center py-2 px-4 rounded-md text-xl font-semibold  max-md:w-[30%]  max-small:text-[17px]  max-small:p-1  max-small:w-[33%] mb-4'>About us</h3>
                <p className=' w-[50%] text-[17px] px-2 ml-2   max-lg:w-[70%]  max-lg:text-[15px]   max-md:w-[90%] max-md:text-[13px]  max-sm:px-0 max-sm:pt-3  '>We're the driving force behind your online success, crafting
                    strategies that captivate audiences and elevate brands.</p>
            </div>
            <div className=' w-[90%] m-auto bg-gray-900 rounded-2xl'>
                <p className=' text-[17px] text-white p-12 mt-7 paragraph   max-lg:p-6  max-lg:text-[16px]  max-sm:text-[14px]'>ElevateEdge  is a leading digital media and marketing agency based in ,kolkata India. Our agency was co-founded by John Morgon and Pat Steve, who bring a wealth of experience in social media and content creation.
                    <br />
                    <br />
                    Our agency specializes in providing a wide range of services including social media management, digital marketing, brand collabs, content strategy, video editing, advertising campaigns, and social media optimization. Our team of experts work with brands to create and implement unique and engaging social media campaigns that help increase brand awareness and drive conversions.
                    <br />
                </p>
            </div>


        </>
    )
}

export default AboutUs