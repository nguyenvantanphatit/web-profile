'use client';

import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { AnimatedWord } from './word';
import { letterAnimation, letterAnimationTwo } from './anim';
import Link from 'next/link';
import type { LinkProps } from 'next/link';

type AnimatedLinkProps = Omit<LinkProps, 'children'> & {
  children: React.ReactNode;
};

export default function AnimatedLink({
  href,
  children,
  ...props
}: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const processChildren = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === 'string') {
      return child.split(' ').map((word, index, array) => (
        <React.Fragment key={`word-${index}`}>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-pointer overflow-hidden"
          >
            <AnimatedWord
              title={word}
              animation={letterAnimation}
              isHovered={isHovered}
            />
            <div className="absolute top-0">
              <AnimatedWord
                title={word}
                animation={letterAnimationTwo}
                isHovered={isHovered}
              />
            </div>
          </motion.div>
          {index < array.length - 1 && (
            <span key={`space-${index}`}>&nbsp;</span>
          )}
        </React.Fragment>
      ));
    } else if (React.isValidElement(child)) {
      return React.cloneElement(child, {}, processChildren(child.props.children));
    } else if (Array.isArray(child)) {
      return child.map((nestedChild, index) => (
        <React.Fragment key={`nested-${index}`}>
          {processChildren(nestedChild)}
        </React.Fragment>
      ));
    }
    return child;
  };

  return (
    <Link href={href} {...props}>
      {processChildren(children)}
    </Link>
  );
}