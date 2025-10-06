import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-100">
          {title}
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_5px_rgba(59,130,246,0.4)]"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};