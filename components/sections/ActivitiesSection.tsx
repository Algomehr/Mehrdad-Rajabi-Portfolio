import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { ACTIVITIES } from '../../constants';
import { CheckBadgeIcon } from '../Icons';

export const ActivitiesSection: React.FC = () => {
  return (
    <SectionWrapper id="activities" title="فعالیت‌ها و عضویت‌ها">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-6 bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-lg hover:bg-slate-800/60 transition-colors duration-300">
              <span className="text-blue-400 mt-1 flex-shrink-0">
                <CheckBadgeIcon />
              </span>
              <p className="text-lg text-gray-300 font-medium">
                {activity.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};