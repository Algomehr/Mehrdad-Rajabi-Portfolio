import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HomeIcon, UserIcon, BriefcaseIcon, PencilIcon, MailIcon, GlobeIcon, BookOpenIcon, UsersIcon } from './Icons';

export interface NavItem {
  to: string;
  label: string;
  icon: React.ReactNode;
}

export const navItems: NavItem[] = [
  { to: 'home', label: 'خانه', icon: <HomeIcon /> },
  { to: 'about', label: 'درباره من', icon: <UserIcon /> },
  { to: 'portfolio', label: 'نمونه کارها', icon: <BriefcaseIcon /> },
  { to: 'blog', label: 'مقالات', icon: <PencilIcon /> },
  { to: 'teaching', label: 'دوره‌ها', icon: <BookOpenIcon /> },
  { to: 'activities', label: 'فعالیت‌ها', icon: <UsersIcon /> },
  { to: 'online-presence', label: 'فضای مجازی', icon: <GlobeIcon /> },
  { to: 'contact', label: 'تماس', icon: <MailIcon /> },
];

interface NavLinkProps {
  item: NavItem;
  onSetActive: (to: string) => void;
  linkRef: (el: HTMLDivElement | null) => void;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ item, onSetActive, linkRef, isActive }) => (
  <div ref={linkRef} className="relative">
    <Link
      to={item.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onSetActive={() => onSetActive(item.to)}
      className={`group relative flex items-center justify-center h-14 w-14 cursor-pointer transition-all duration-300 rounded-full ${isActive ? 'text-blue-300' : 'text-gray-400 hover:text-blue-400'}`}
    >
      <span className="transform transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
      <span className="absolute left-full ml-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {item.label}
      </span>
    </Link>
  </div>
);


export const SidebarNav: React.FC = () => {
    const [indicatorStyle, setIndicatorStyle] = useState({ top: '0px', opacity: 0 });
    const [activeSection, setActiveSection] = useState(navItems[0]?.to || '');
    const linkRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = navItems.findIndex(item => item.to === activeSection);
        const activeLinkElement = linkRefs.current[activeIndex];
        
        if (activeLinkElement) {
            setIndicatorStyle({
                top: `${activeLinkElement.offsetTop}px`,
                opacity: 1,
            });
        }
    }, [activeSection]);
    
    // Set initial position after mount to ensure correct offsetTop
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        const homeEl = linkRefs.current[0];
        if (homeEl) {
             setIndicatorStyle({
                top: `${homeEl.offsetTop}px`,
                opacity: 1,
            });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <nav className="nav-dock">
      <div className="nav-indicator" style={indicatorStyle} />
      <div className="relative z-10 flex flex-col items-center gap-2 py-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item.to}
            item={item}
            isActive={activeSection === item.to}
            onSetActive={setActiveSection}
            linkRef={el => linkRefs.current[index] = el}
          />
        ))}
      </div>
    </nav>
  );
};