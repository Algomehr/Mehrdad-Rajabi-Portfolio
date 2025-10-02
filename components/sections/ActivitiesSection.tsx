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
            <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-800/50">
              <span className="text-blue-400 mt-1 flex-shrink-0">
                <CheckBadgeIcon />
              </span>
              <p className="text-lg text-gray-300">
                {activity.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};