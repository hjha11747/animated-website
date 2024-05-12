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
        autoplaySpeed: 1500,
    };

    return (
        <>
        <div className='services flex items-center justify-start px-[70px]  pt-20'>
                <h3 className=' bg-lime-400 py-2 px-4 rounded-md text-xl  '>Testmonials</h3>
                <p className=' w-[50%] text-[11px] px-2 ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla provident magni at laborum odio
                    doloribus. Dolorum laudantium, consequuntur dignissimos cumque provident deserunt quo quas a aut ab
                    atque harum.</p>
            </div>

        <div className='w-[90%] mx-auto rounded-2xl p-2 pb-10 mt-10'>
            <div className='w-[80%] m-auto'>
                <div className='mt-20'>
                    <Slider {...settings}>
                        {data.map((d, index) => (
                            <div key={index} className='testimonial-item '>
                                <div className=' mx-2 bg-white h-[500px] text-black rounded-xl'>
                                    <div className='h-56 rounded-t-xl bg-stone-600 flex justify-center items-center'>
                                        <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full' />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                        <p className='text-xl font-semibold'>{d.name}</p>
                                        <p className=' items-center'>{d.review}</p>
                                        <p className=' font-medium'>{d.position}</p>
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
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas quos dolorem magni tempore, numquam aspernatur est minus, amet ipsum eaque accusamus beatae dignissimos harum quas magnam unde consequuntur',
        position: 'CEO/CO-FOUNDER'
    },
    {
        name: 'Harry Smith',
        img: employee2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas quos dolorem magni tempore, numquam aspernatur est minus, amet ipsum eaque accusamus beatae dignissimos harum quas magnam unde consequuntur',
        position: 'CEO/CO-FOUNDER'
    },
    {
        name: 'Salina Jasmine',
        img: employee3,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas quos dolorem magni tempore, numquam aspernatur est minus, amet ipsum eaque accusamus beatae dignissimos harum quas magnam unde consequuntur',
        position: 'CEO/CO-FOUNDER'
    },
    {
        name: 'Pat Steve',
        img: employee4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas quos dolorem magni tempore, numquam aspernatur est minus, amet ipsum eaque accusamus beatae dignissimos harum quas magnam unde consequuntur',
        position: 'CEO/CO-FOUNDER'
    },
    {
        name: 'Nikita Mark',
        img: employee5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas quos dolorem magni tempore, numquam aspernatur est minus, amet ipsum eaque accusamus beatae dignissimos harum quas magnam unde consequuntur',
        position: 'CEO/CO-FOUNDER'
    },
];


export default Testimonial;
