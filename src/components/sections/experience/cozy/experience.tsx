import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { experiences } from '@/components/sections/experience/config';
import TextReveal from '@/components/motion/text-reveal';
import TechCard from './tech-card';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

function Experiences() {
  return (
    <MotionWrap className="w-full md:py-32" id="experiences">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              <TextReveal>My Experience</TextReveal>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              <TextReveal>
                Here are some of my work experiences where I&apos;ve turned
                challenges into accomplishments, making things happen.
              </TextReveal>
            </p>
            <section className='hidden md:block'>
              <TechCard />
            </section>
          </div>
          <div className="relative flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                <section className='hidden md:block'>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-[106px] top-[210px] w-1 h-full flex flex-col items-center justify-between">
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-current" style={{ borderColor: `var(--${exp.color})` }} />
                      <div className="border-l-2 border-dashed flex-1" style={{ borderColor: `var(--${exp.color})` }} />
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-current" style={{ borderColor: `var(--${experiences[index + 1].color})` }} />
                    </div>
                  )}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-[210px] h-[210px]">
                      <div className={`absolute inset-0 rounded-full border-2 ${exp.color}`}>
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1.5 h-1.5 rounded-full ${exp.bg}`}
                            style={{
                              left: '50%',
                              top: '50%',
                              transform: `rotate(${i * 30}deg) translate(105px, -50%)`
                            }}
                          />
                        ))}
                      </div>
                      <svg
                        className="absolute inset-0"
                        viewBox="0 0 210 210"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40 105C40 69.1015 69.1015 40 105 40C140.899 40 170 69.1015 170 105"
                          className={`${exp.accent}`}
                          strokeWidth="2"
                        />
                      </svg>
                      <div className={`absolute inset-4 rounded-full ${exp.bg} flex flex-col items-center justify-center p-6 text-center`}>
                        <exp.icon className={`w-8 h-8 mb-2 ${exp.iconColor}`} />
                        <h3 className="font-semibold mb-1">{exp.company}</h3>
                        <p className="text-xs text-gray-600 leading-tight">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                </section>
                <Card className="flex-grow p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border border-border dark:bg-slate-800 flex items-center justify-center dark:text-cyan-400 text-black">
                      {exp.company.slice(0, 1)}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{exp.company}</h2>
                      <p className="text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {exp.description?.map((resp, idx) => (
                      <li key={idx} className="pl-2">{resp}</li>
                    ))}
                  </ul>

                  <div>
                    <p className="font-semibold mb-2">TECHNOLOGIES:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Experiences;
