import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {

    useGSAP(() => {
        let tl5 = gsap.timeline();


        tl5.from('.name', {
            duration: 1,
            opacity: 0,
            y: 30
        })

        tl5.from('.email', {
            duration: 1,
            opacity: 0,
            y: 30
        })

        tl5.from('.textarea', {
            duration: 1,
            opacity: 0,
            y: 30
        })
        tl5.from('.submit', {
            duration: 1,
            opacity: 0,
            x: -100
        })

        tl5.from('.contact-us img', {
            rotateZ: 360,
            delay:1,
            duration: 4,
            opacity: 0,
            y: 400
        })

        ScrollTrigger.create({
            trigger: '.contact-us',
            start: 'top 70%',
            end: 'top 30%',
            scrub: 2,
            markers: false,
            animation: tl5,
        });
    })

    return (
        <>
            <div className='services flex justify-start px-[70px]  max-sm:flex-col max-sm:px-[30px]  pt-20' id='contactus'>
                <h3 className=' bg-lime-400 text-center py-2 px-4 md:mb-3 rounded-md text-xl font-semibold  max-md:w-[40%]  max-xs:w-[50%]  max-small:text-[17px]  max-small:p-1  max-small:w-[33%] '>Contact Us</h3>
                <p className='w-[50%] text-[17px] px-2 ml-2   max-lg:w-[70%]  max-lg:text-[15px]   max-md:w-[90%] max-md:text-[13px]  max-sm:px-0 max-sm:pt-3 mb-5 '>Connect with Us: Let's Discuss
                    Your Digital Marketing Needs</p>
            </div>

            <div className=" bg-slate-100 w-[90%] h-[550px] m-auto rounded-3xl flex justify-between items-center px-20 mb-20 contact-us  max-lg:h-[500px]  max-lg:px-14 ">
                <div className="w-[40%] max-sm:w-full">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <div className="flex flex-col w-full gap-1 mb-6 name">
                            <label htmlFor="name" className=" text-xl">Name</label>
                            <input type="hidden" name="access_key" value="fa582549-480b-4865-b440-e1c8fe8b85bc" />
                            <input className=" h-10 w-full rounded-lg outline-none" maxLength="256" name="name" data-name="Name" placeholder="" type="text" id="name"  />
                        </div>
                        <div className="flex flex-col w-full  gap-1 mb-6 email">
                            <label htmlFor="email" className="text-xl">Email Address*</label>
                            <input className="h-10 w-full rounded-lg outline-none" maxLength="256" name="email" data-name="Email" placeholder="" type="email" id="email" required />
                        </div>
                        <div className="flex flex-col w-full  gap-1 mb-6 textarea">
                            <label htmlFor="field" className="text-xl">Message*</label>
                            <textarea maxLength="5000" id="field" name="field" data-name="Field" className="h-10 w-full rounded-lg outline-none"></textarea>
                        </div>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                        <button className=" bg-black text-white px-5 py-3 text-xl rounded-lg submit text-center" type='submit' >Submit Here</button>
                    </form>
                </div>
                <img height={350} width={350} className=' max-lg:h-[600px] max-lg:w-[270px] max-md:h-[520px] max-md:w-[240px] max-sm:hidden ' src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/64cba6a986ab7ac79ce5d05f_Illustration%20contact.png" loading="lazy" alt=""/>
            </div>
        </>
    )
}

export default ContactUs;
