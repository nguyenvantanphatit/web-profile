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
      <div className="relative z-10 h-[42.5dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center px-4 md:px-6">
            <img src="/images/banner/profile.png" alt="user-avatar-image"
              className="border-4 border-solid border-white rounded-full" />
            <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight">
              <TextReveal>Front-end Developer</TextReveal>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
