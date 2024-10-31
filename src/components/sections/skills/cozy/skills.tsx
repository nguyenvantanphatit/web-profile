import React from 'react';
import SkillCard from './skill-card';

import Reveal from '@/components/reveal';

import { dataBrand, skills } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';

function Skills() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Skills
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my skills where I&apos;ve turned knowledge into
            expertise, making things happen.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between flex-col md:flex-row gap-4">
          <div className="grid grid-cols-3 gap-4 xl:grid-cols-5 px-4 sm:px-8">
            {dataBrand.map((item) => (
              <div key={item.id} className='pt-2 w-full rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex'>
                <a href="#">
                  <img src={item.image} alt={`Brand ${item.id}`} className='h-10 px-2 rounded-md' />
                </a>
                <h5 className="text-center py-2 text-gray-900 text-base font-semibold leading-relaxed ">{item.label}</h5>
              </div>
            ))}
          </div>
          <div className="system w-full md:w-3/5 mt-12">
            <div className="system__orbit system__orbit--sun">
              <img src="/images/skill/nextjs.svg" alt="Sun" className="system__icon system__icon--sun" />
            </div>
            <div className="system__orbit system__orbit--mercury">
              <div className="system__planet system__planet--mercury">
                <img src="/images/skill/react.svg" alt="Mercury" />
              </div>
            </div>
            <div className="system__orbit system__orbit--venus">
              <div className="system__planet system__planet--venus">
                <img src="/images/skill/typescript.svg" alt="Venus" />
              </div>
            </div>
            <div className="system__orbit system__orbit--earth">
              <div className="system__planet system__planet--earth">
                <img src="/images/skill/javascript.svg" alt="Earth" />
              </div>
            </div>
            <div className="system__orbit system__orbit--mars">
              <div className="system__planet system__planet--mars">
                <img src="/images/skill/angular.svg" alt="Mars" />
              </div>
            </div>
            <div className="system__orbit system__orbit--jupiter">
              <div className="system__planet system__planet--jupiter">
                <img src="/images/skill/tailwind-css.svg" alt="Jupiter" />
              </div>
            </div>
          </div>
          {/* {skills.map((skill, index) => (
            <SkillCard
              key={`skill_${index}`}
              index={index + 1}
              name={skill.name}
              description={skill.description}
              thumbnail={skill.thumbnail}
            />
          ))} */}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
