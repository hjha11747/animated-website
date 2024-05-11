import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    useGSAP(({ timeline }) => {
        let tl2 = gsap.timeline({ delay: '-=1' });
        tl2.from("h1", {
          y: -30,
          duration: 0.1,
          delay: 1,
          opacity: 0,
          stagger: 0.2
        });
      });

    return (
        <>
        
        </>
        
    )
}

export default Hero