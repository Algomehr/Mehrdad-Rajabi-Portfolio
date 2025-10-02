
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28 border-b border-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          {title}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};
