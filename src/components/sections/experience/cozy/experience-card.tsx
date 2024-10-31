import React from 'react';
import { CardContent, Card } from '@/components/ui/card';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  technologies,
  className
}: ExperienceCardProps) {
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold">
            <TextReveal>{company}</TextReveal>
          </h3>
          <span className="text-sm font-medium">
            <TextReveal>{duration}</TextReveal>
          </span>
        </div>
        <h4 className="mt-2 text-xl font-medium uppercase">
          <TextReveal>{name}</TextReveal>
        </h4>
        {description && (
          <ul className="mt-4 space-y-2 list-disc list-inside">
            {description.map((desc, index) => (
              <li key={index} className="text-zinc-700 dark:text-zinc-400 text-lg font-light">
                <TextReveal>{desc}</TextReveal>
              </li>
            ))}
          </ul>
        )}
        {technologies && (
          <div className="mt-6">
            <h5 className="text-md font-semibold uppercase">Technologies:</h5>
            <ul className="flex flex-wrap gap-2 mt-2">
              <div className="mt-2 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={`project-tag_${index}`}>{tech}</Badge>
                ))}
              </div>
            </ul>
          </div>
        )}
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
