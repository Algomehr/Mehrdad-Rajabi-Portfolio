import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { ARTICLES } from '../../constants';
import { PencilIcon } from '../Icons';

export const BlogSection: React.FC = () => {
  return (
    <SectionWrapper id="blog" title="مقالات و دیدگاه‌ها">
      <div className="space-y-8">
        {ARTICLES.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
          >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-blue-400 mb-1">{article.publishDate}</p>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{article.title}</h3>
                    <p className="text-gray-400">{article.summary}</p>
                </div>
                <div className="hidden sm:block text-gray-500 group-hover:text-blue-400 transition-colors">
                    <PencilIcon />
                </div>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};