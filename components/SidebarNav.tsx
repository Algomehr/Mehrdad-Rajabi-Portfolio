import React from 'react';
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

const NavLink: React.FC<{ item: NavItem }> = ({ item }) => (
  <Link
    activeClass="text-blue-400 bg-gray-800 ring-2 ring-blue-400 shadow-lg shadow-blue-500/50"
    to={item.to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="group relative flex items-center justify-center h-14 w-14 cursor-pointer text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 rounded-full"
  >
    {item.icon}
    <span className="absolute left-full ml-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      {item.label}
    </span>
  </Link>
);

export const SidebarNav: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 h-full w-20 bg-slate-900/50 backdrop-blur-sm border-l border-gray-800 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {navItems.map((item) => (
          <NavLink key={item.to} item={item} />
        ))}
      </div>
    </nav>
  );
};