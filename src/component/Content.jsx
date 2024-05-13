import { useGSAP } from '@gsap/react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {

    useGSAP(() => {
        let tl2 = gsap.timeline();

        tl2.from('.services', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay:1,
        })
            .from(
                '.elem.line1.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 2,
                    delay:1,
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
                    delay:1,
                },
                'line2'
            )
            .from(
                '.elem.line2.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    delay:1,
                },
                'line2'
            )
            .from(
                '.elem.line3.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    delay:1,
                },
                'line3'
            )
            .from(
                '.elem.line3.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    delay:1,
                },
                'line3'
            )
            .from(
                '.elem.line4.left',
                {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    delay:1,
                },
                'line4'
            )
            .from(
                '.elem.line4.right',
                {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    delay:1,
                },
                'line4'
            );

        ScrollTrigger.create({
            trigger: '.section',
            start: 'top 60%',
            end: 'top 0%',
            scrub: 2,
            markers: false,
            animation: tl2,
        });
    });



    return (
        <>
            <div className='services flex justify-start px-[70px]  max-sm:flex-col max-sm:px-[30px]  pt-20' id='services'>
                <h3 className=' bg-lime-400 text-center py-2 px-4 rounded-md text-xl font-semibold  max-md:w-[40%]  max-xs:w-[50%]  max-small:text-[17px]  max-small:p-1  max-small:w-[33%] '>Our Services</h3>
                <p className='  w-[50%] text-[17px] px-2 ml-2   max-lg:w-[70%]  max-lg:text-[15px]   max-md:w-[90%] max-md:text-[13px]  max-sm:px-0 max-sm:pt-3 '>At our digital marketing agency, we offer a range of services to help businesses grow.. These services include:</p>
            </div>

            <div className='section overflow-x-hidden'>
                <div className=" min-h-[85vh] w-full py-7 px-[80px] flex justify-between flex-wrap contain  max-medium:flex-col  max-sm:px-3">
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line1 left mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col  ">
                            <h2 className=' bg-lime-300 w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px] '>Optimizing search engine</h2>
                            <Link to="https://searchengineland.com/guide/what-is-seo" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px]   '>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]  ">
                            <img className='max-lg:h-[190px] max-small:h-[150px] max-lg:px-2  max-medium:ml-8  max-md:ml-3 ' src="https://zagfirst.com/wp-content/uploads/2018/06/search-engine-optimization.jpg" alt="" />
                        </div>
                    </div>
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line1 right mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2 bg-black">
                        <div className=" elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px] '>Social marketing media</h2>
                            <Link to="https://www.investopedia.com/terms/s/social-media-marketing-smm.asp" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px]  text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className=" elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://www.wordstream.com/wp-content/uploads/2022/02/social-media-marketing-fundamentals-wordstream.png" alt="" />
                        </div>
                    </div>
                    <div className="  flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line2 left mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2 bg-black">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px]'>E-mail marketing</h2>
                            <Link to="https://www.brevo.com/blog/what-is-email-marketing/" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px]  text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://thebrandhopper.com/wp-content/uploads/2022/12/email-marketing-strategy.jpg" alt="" />
                        </div>
                    </div>
                    <div className="  flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line2 right mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300 w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px]'>Youtube
                                Management</h2>
                            <Link to="https://www.hubspot.com/youtube-marketing" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px] '>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4Bfvq6_6cF99FOjH0XJAzo_hT7P_RsXGd1weB_6WrA&s" alt="" />
                        </div>
                    </div>
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line3 left mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300  w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px]'>Content
                                Creation</h2>
                            <Link to="https://www.semrush.com/blog/content-creation/" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px] '>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://media.istockphoto.com/id/1679918797/vector/content-creation.jpg?s=612x612&w=0&k=20&c=Rwt1CiTLP3-kJwrVnmcbwYz-Q3Mava_4l2N_lOfiyPQ=" alt="" />
                        </div>
                    </div>
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line3 right mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2 bg-black">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px]'>Web
                                development</h2>
                            <Link to="https://www.geeksforgeeks.org/web-development/" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px] text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://p7.hiclipart.com/preview/578/658/575/web-development-web-developer-web-design-software-developer-web-design.jpg" alt="" />
                        </div>
                    </div>
                    <div className="  flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line4 left mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2 bg-black">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-white  w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px]'>Graphics &
                                Video Editing</h2>
                            <Link to="https://www.udemy.com/course/complete-graphics-design-and-video-editing-masterclass/" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px] text-white'>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://png.pngtree.com/png-vector/20220524/ourmid/pngtree-video-editor-icon-design-png-image_4709312.png" alt="" />
                        </div>
                    </div>
                    <div className=" flex-shrink-0 h-[300px] w-[47%] rounded-lg shadow-lg border border-solid p-14 flex  elem line4 right mb-14  max-xl:px-5 max-medium:w-[90%] max-medium:mx-auto  max-sm:h-[230px]  max-xs:h-[200px] max-xs:py-6  max-sm:py-8  max-small:w-[100%] max-small:px-2">
                        <div className="elem-part1 h-full w-[50%] flex justify-between flex-col">
                            <h2 className=' bg-lime-300  w-[89%] text-[23px] font-semibold px-2 rounded-md max-lg:text-[20px]  max-sm:text-[17px]  max-small:text-[15px] max-xs:text-[13px]'>Reputation Management</h2>
                            <Link to="https://blog.hubspot.com/marketing/reputation-management" target="_blank" rel="noopener noreferrer" className='text-[20px]  max-sm:text-[15px] max-xs:text-[13px] '>Learn More<i className="ri-arrow-right-up-line text-[25px] max-xs:text-[17px]  pl-1"></i></Link>
                        </div>
                        <div className="elem-part2 h-full w-[50%]">
                            <img className='max-lg:h-[190px] max-small:h-[120px] max-lg:px-2  max-medium:ml-8  max-md:ml-3  rounded-2xl' src="https://st4.depositphotos.com/18657574/22402/v/450/depositphotos_224020612-stock-illustration-paper-pencil-concept-vector-linear.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content