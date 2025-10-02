import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { COURSES } from '../../constants';

export const TeachingSection: React.FC = () => {
  return (
    <SectionWrapper id="teaching" title="دوره‌های آموزشی و سوابق تدریس">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {COURSES.map((course) => (
          <div
            key={course.id}
            className="group flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg border border-transparent hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-blue-500/20"
          >
            <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{course.title}</h3>
            <p className="text-gray-400">{course.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
