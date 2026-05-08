import React from 'react';
import { Project } from '../../types';
import { ProjectGraphic } from './ProjectGraphics';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col border border-slate-700/50">
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0"></div>
      <div className="relative bg-slate-900/60 backdrop-blur-md rounded-lg overflow-hidden flex flex-col flex-grow h-full z-10 border border-slate-700/30">
        <ProjectGraphic graphicId={project.graphicId} />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-blue-400 mb-2">{project.tagline}</p>
          <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs bg-slate-800/80 text-gray-300 px-2 py-1 rounded-full border border-slate-700">{tag}</span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="shrink-0 bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full backdrop-blur-md shadow-lg transition duration-300 whitespace-nowrap border border-blue-500/50"
            >
              مشاهده پروژه
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};