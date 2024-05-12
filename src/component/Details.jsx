import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Step = ({ title, show, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
        onClick();
    };

    return (
        <>
        

        <div className={`bg-slate-100 p-7 rounded-2xl mb-6 shadow-lg shadow-black ${isExpanded ? 'bg-slate-300' : 'bg-slate-100'}`}>
            <div className='flex justify-between text-2xl font-semibold process'>
                <h1>{title}</h1>
                <button onClick={toggleExpanded}>
                    {isExpanded ? <i className="ri-subtract-line text-5xl font-thin"></i> : <i className="ri-add-circle-line text-5xl font-thin"></i>}
                </button>
            </div>
            {show ? (
                <p className='text-lg font-normal'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusamus in, fuga totam quidem saepe minus velit iusto a, deserunt minima ipsum cupiditate blanditiis neque, natus nostrum. Fuga animi illo similique iste fugit tenetur, sequi harum atque est, rem quaerat.
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
        { title: "01. Consultation" },
        { title: "02. Research and Development" },
        { title: "03. Implementation" },
        { title: "04. Monitoring and Optimization" },
        { title: "05. Reporting if Errors" },
        { title: "06. Continual Improvements" }
    ];

    useGSAP(() => {
        let tl4 = gsap.timeline();

        
        tl4.from(".process h1", {
            opacity: 0,
            duration: 0.3,
            delay:0.3,
            y:30
        });
        tl4.from(".process button", {
            opacity: 0,
            rotate:180,
            duration: 1,
            delay:0.3,
            x:200
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
            <div className='services flex items-center justify-start px-[70px] py-6 pt-20 mb-3'>
                <h3 className='bg-lime-400 py-2 px-4 rounded-md text-xl'>Our Process</h3>
                <p className='w-[50%] text-[11px] px-2 ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla provident magni at laborum odio
                    doloribus. Dolorum laudantium, consequuntur dignissimos cumque provident deserunt quo quas a aut ab
                    atque harum.</p>
            </div>
            <div className='w-[90%] m-auto bg-slate-200 px-[190px] py-10 rounded-xl '>
                <div>
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            title={step.title}
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
