import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Step = ({ title, details, show, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
        onClick();
    };

    return (
        <>


            <div className={`bg-slate-100 p-7 rounded-2xl mb-6 shadow-lg shadow-black  max-sm:p-3 max-md:w-full ${isExpanded ? 'bg-slate-300' : 'bg-slate-100'}`}>
                <div className='flex justify-between text-2xl font-semibold process    max-[900px]:text-xl  max-sm:text-sm sm:'>
                    <h1>{title}</h1>
                    <button onClick={toggleExpanded}>
                        {isExpanded ? <i className="ri-subtract-line text-5xl font-thin  max-[900px]:text-3xl"></i> : <i className="ri-add-circle-line text-5xl font-thin   max-[900px]:text-3xl"></i>}
                    </button>
                </div>
                {show && isExpanded ? (
                    <p className='text-lg font-normal  max-[900px]:text-base max-sm:text-sm'>
                        <hr className='border-black h-1 my-4' />
                        {details}
                    </p>
                ) : null}
            </div>
        </>
    );
};

const Details = () => {
    const [stepStates, setStepStates] = useState({});

    useEffect(() => {
        setStepStates(Object.fromEntries(steps.map(step => [step.title, false])));
    }, []);

    const toggleStep = (title) => {
        setStepStates(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    const steps = [
        { title: "01. Consultation", details: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
        { title: "02. Research and Development", details: "Understand the client's business goals, target audience, and competitive landscape. Gather information about the client's existing digital marketing efforts, if any. Define the scope of work, budget, and timeline." },
        { title: "03. Implementation", details: "We implements campaigns, creates content, manages advertising, and monitors performance, all while staying adaptable to trends and client needs, to achieve campaign objectives and deliver results." },
        { title: "04. Monitoring and Optimization", details: "We implements campaigns, creates content, manages advertising, and monitors performance, all while staying adaptable to trends and client needs, to achieve campaign objectives and deliver results." },
        { title: "05. Reporting if Errors", details: "We collect and analyze data, generate reports, and hold regular client meetings. They use these interactions to provide insights, actionable recommendations, and set new objectives for ongoing campaign success." },
        { title: "06. Continual Improvements", details: "We continuously analyze data, integrate feedback, and optimize strategies to achieve better results over time, staying updated and collaborating closely with clients in an iterative process." }
    ];

    useGSAP(() => {
        let tl4 = gsap.timeline();


        tl4.from(".process h1", {
            opacity: 0,
            duration: 0.3,
            delay: 0.3,
            y: 30
        });
        tl4.from(".process button", {
            opacity: 0,
            rotate: 180,
            duration: 1,
            delay: 0.3,
            x: 200
        });

        ScrollTrigger.create({
            trigger: '.process',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 2,
            markers: false,
            animation: tl4,
        });
    });

    return (
        <>
            <div className='services flex items-center justify-start px-[70px] py-6 pt-20 mb-3' id='process'>
                <h3 className='bg-lime-400 py-2 px-4 rounded-md text-xl font-semibold  max-sm:text-[13px] max-sm:p-1'>Our Working Process</h3>
                <p className='w-[50%] text-[17px] px-2 ml-2  max-sm:text-[10px]'>Step-by-Step Guide to Achieving
                    Your Business Goals include:.</p>
            </div>
            <div className='w-[90%]  m-auto bg-slate-200 px-[190px] max-md:px-[20px] py-10 rounded-xl '>
                <div>
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            title={step.title}
                            details={step.details}
                            show={stepStates[step.title]}
                            onClick={() => toggleStep(step.title)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Details;
