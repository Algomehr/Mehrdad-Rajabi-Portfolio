import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { TelegramIcon, InstagramIcon, GitHubIcon, LinkIcon, YouTubeIcon } from '../Icons';

interface LinkInfo {
  type: string;
  url: string;
  title: string;
  description: string;
}

const onlineLinks: LinkInfo[] = [
    { type: 'telegram', url: 'https://t.me/Martin_Danvers', title: 'تلگرام', description: 'برای ارتباط مستقیم.' },
    { type: 'instagram', url: 'https://www.instagram.com/mehrdad_rajabi_1738/', title: 'اینستاگرام', description: 'سفر تصویری من را دنبال کنید.' },
    { type: 'github', url: 'https://github.com/Algomehr', title: 'گیت‌هاب', description: 'کدها و پروژه‌های من را ببینید.' },
    { type: 'youtube', url: 'https://www.youtube.com/@MehrdadRajabi-1738', title: 'یوتیوب', description: 'ویدیوها، آموزش‌ها و محتوای علمی.' },
];

const LinkCard: React.FC<{ link: LinkInfo }> = ({ link }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        telegram: <TelegramIcon />,
        instagram: <InstagramIcon />,
        github: <GitHubIcon />,
        youtube: <YouTubeIcon />,
        default: <LinkIcon />
    };

    return (
        <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-transparent hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-blue-500/20"
        >
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                {iconMap[link.type] || iconMap.default}
            </div>
            <div>
                <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{link.title}</h4>
                <p className="text-sm text-gray-400">{link.description}</p>
            </div>
        </a>
    );
};

export const OnlinePresenceSection: React.FC = () => {
    return (
        <SectionWrapper id="online-presence" title="من را آنلاین پیدا کنید">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {onlineLinks.map((link) => (
                    <LinkCard key={link.url} link={link} />
                ))}
            </div>
        </SectionWrapper>
    );
};