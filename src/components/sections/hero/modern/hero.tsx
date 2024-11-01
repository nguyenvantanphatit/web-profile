'use client';
// Credit: Cuberto

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';
import ParallaxImage from '@/components/motion/parallax-image';

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[59.5dvh] md:h-[52.5dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center px-4 md:px-6 relative">
           <svg className="circle-svg circle-svg-center custom-spin-slow" viewBox="0 0 500 500" width="500" height="500">
              <defs>
                <path
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                  id="textcircle_top"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="20s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite"
                  />
                </path>
              </defs>
              <text className="circle-text" dy="70" textLength="1220">
                <textPath xlinkHref="#textcircle_top">
                  Front-end Developer Front-end Developer Front-end Developer
                </textPath>
              </text>
            </svg>
            <img
              src="/images/banner/profile.png"
              alt="user-avatar-image"
              className="border-4 w-44 h-44 border-solid border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
