import { useGSAP } from '@gsap/react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {

    useGSAP(() => {
        let tl2 = gsap.timeline();

        tl2.from('.services', {
            y: 30,
            opacity: 0,
            duration: 0.1,
        })
            .from(
                '.elem.line1.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                },
                'together'
            )
            .from(
                '.elem.line1.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                },
                'together'
            )
            .from(
                '.elem.line2.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                },
                'line2'
            )
            .from(
                '.elem.line2.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                },
                'line2'
            )
            .from(
                '.elem.line3.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                },
                'line3'
            )
            .from(
                '.elem.line3.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                },
                'line3'
            )
            .from(
                '.elem.line4.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                },
                'line4'
            )
            .from(
                '.elem.line4.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                },
                'line4'
            );

        ScrollTrigger.create({
            trigger: '.section',
            start: 'top 77%',
            end: 'top -80%',
            scrub: 2,
            markers: false,
            animation: tl2,
        });
    });



    return (
        <>
            <div className='services flex items-center justify-start px-[80px] pt-[70px]' id='services'>
                <h3 className=' bg-lime-400 py-2 px-4 rounded-md text-xl font-semibold  '>Our Services</h3>
                <p className=' w-[50%] text-[17px] px-2 ml-2'>At our digital marketing agency, we offer a range of services to
                    help businesses grow and succeed online. These services include:</p>
            </div>

            <div className='section overflow-x-hidden'>
                <div className=" min-h-[85vh] w-full py-7 px-[80px] flex justify-between flex-wrap contain">
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line1 left mb-14">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300 w-[89%] text-[23px] font-semibold px-2 rounded-md'>Search engine Optimixzation</h2>
                            <h4 className='text-[20px]'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex   elem line1 right mb-14 bg-black">
                        <div className=" elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md'>Social marketing media</h2>
                            <h4 className='text-[20px] text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className=" elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className=" elem line2 left flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  mb-14 bg-black">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className='bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md'>E-mail marketing</h2>
                            <h4 className='text-[20px] text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line2 right mb-14">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300 w-[89%] text-[23px] font-semibold px-2 rounded-md'>Youtube
                                Management</h2>
                            <h4 className='text-[20px]'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className="elem line3 left flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex   mb-14">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300 w-[89%] text-[23px] font-semibold px-2 rounded-md'>Content
                                Creation</h2>
                            <h4 className='text-[20px]'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className="elem line3 right flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  mb-14 bg-black">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md'>Web
                                development</h2>
                            <h4 className='text-[20px] text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className=" elem line4 left flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex mb-14 bg-black">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md'>Graphics &
                                Video Editing</h2>
                            <h4 className='text-[20px] text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                    <div className="elem line4 right flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  mb-14">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300 w-[89%] text-[23px] font-semibold px-2 rounded-md'>Reputation Management</h2>
                            <h4 className='text-[20px]'>Learn More<i className="ri-arrow-right-up-line text-[25px] pl-1"></i></h4>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content