import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import { ProjectCard } from '../ProjectCard';

export const PortfolioSection: React.FC = () => {
  return (
    <SectionWrapper id="portfolio" title="نمونه کارها">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};