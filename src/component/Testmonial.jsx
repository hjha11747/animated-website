import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import employee1 from '../../public/images/emplopyee1.jpg'
import employee2 from '../../public/images/employee2.webp'
import employee3 from '../../public/images/employee3.webp'
import employee4 from '../../public/images/employee4.jpg'
import employee5 from '../../public/images/employee5.jpg'


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className=' services flex justify-start px-[70px]  max-sm:flex-col max-sm:px-[30px]  pt-20' id='testimonial'>
                <h3 className=' bg-lime-400 text-center py-2 px-4 rounded-md text-xl font-semibold  max-md:w-[40%]  max-xs:w-[50%]  max-small:text-[17px]  max-small:p-1  max-small:w-[33%] '>Testmonials</h3>
                <p className='w-[50%] text-[17px] px-2 ml-2   max-lg:w-[70%]  max-lg:text-[15px]   max-md:w-[90%] max-md:text-[13px]  max-sm:px-0 max-sm:pt-3 '>Meet the  skilled and experienced team behind our
                    successful digital marketing strategies.</p>
            </div>

            <div className=' bg-black w-[90%] mx-auto rounded-2xl p-2 pb-10 mt-10'>
                <div className='w-[80%] m-auto'>
                    <div className='mt-20'>
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div key={index} className='testimonial-item '>
                                    <div className=' mx-2 bg-slate-200 h-[450px] text-black rounded-xl'>
                                        <div className=' h-52 rounded-t-xl bg-gray-900 flex justify-center items-center'>
                                            <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                            <p className='text-xl font-semibold'>{d.name}</p>
                                            <p className=' text-center'>{d.review}</p>
                                            <p className=' font-medium ring-2 ring-zinc-700 p-2 rounded-md'>{d.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

const data = [
    {
        name: 'John Morgan',
        img: employee1,
        review: 'Leading the way in digital marketing, Darshan Prajapati, founder of Unicus Creatives, blends artistry with analytics',
        position: 'CEO/CO-FOUNDER'
    },
    {
        name: 'Harry Smith',
        img: employee2,
        review: '5 Years+ Experience In Digital Marketing,  Management Running Multiple Businesses!',
        position: 'Lead Manager'
    },
    {
        name: 'Salina Jasmine',
        img: employee3,
        review: 'A creative video editor with 2 years experience, brings stories to life. Expertise in Premiere Pro',
        position: 'Senior Software Developer'
    },
    {
        name: 'Pat Steve',
        img: employee4,
        review: 'Leading the way in digital marketing, Darshan Prajapati, founder of Unicus Creatives, blends artistry with analytics.',
        position: 'CEO/CO-FOUNDER'
    },
    {
        name: 'Nikita Mark',
        img: employee5,
        review: '2 Years+ Experience In Content Strategy, Camera, Social Media Expert and SEO',
        position: 'Software Developer'
    },
];


export default Testimonial;
