import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-blue-400 mb-2">{project.tagline}</p>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="shrink-0 bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 whitespace-nowrap"
          >
            مشاهده پروژه
          </a>
        </div>
      </div>
    </div>
  );
};