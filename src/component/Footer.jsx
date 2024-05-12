import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useGSAP(() => {
        let tl6 = gsap.timeline();


        tl6.from('.footer', {
            duration: 1,
            opacity: 0,
            y: 300
        })

        ScrollTrigger.create({
            trigger: '.footer',
            start: 'top 100%',
            end: 'top 80%',
            scrub: 2,
            markers: false,
            animation: tl6,
        });
    })

    return (
        <div className="w-[90%] m-auto bg-black px-14 py-8 rounded-xl footer mb-10 ">
            <div className="top flex justify-between ">
                <h1 className='text-white text-5xl'><i class="ri-menu-search-line"></i>Tinnify</h1>
                <div className="flex gap-4">
                    <img src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/6492aee3747033215208522b_Social%20icon-1.svg" loading="lazy" alt="" />
                    <img src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/6492aee339fcf6a72032b207_Social%20icon.svg" loading="lazy" alt="" />
                    <img src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/6492aee3b10b1ce8c8c60114_Social%20icon-2.svg" loading="lazy" alt="" />
                </div>
            </div>
            <div className="middle">
                <div className='services flex items-center justify-start mt-5'>
                    <h3 className=' bg-lime-400 py-2 px-4 rounded-md text-xl  '>Contact Us:</h3>
                </div>
                <div className="company-info">
                    <h3><span className="green-header">Contact us:</span></h3>
                    <div className="text-white">Email: info@morphius.com</div>
                    <div className="text-white">Phone: 555-567-8901</div>
                    <div className="text-white">Address: 1234 Main StMoonstone City, Stardust State 12345</div>
                </div>
            </div>
            <form>
                <input  className=" h-14 w-[40%] rounded-xl px-2 my-7 outline-none" maxLength="256" name="email-2" placeholder="Enter your email" type="email" />
                <input type="submit" className=" text-white text-xl font-medium bg-sky-500 p-4 px-6 ml-2 rounded-xl" value="Subscribe" />
            </form>
            <div className="my-2"><hr /></div>
            <div className="text-white">© 2023 Flowout. All Rights Reserved.</div>
        </div>
    );
}

export default Footer;
