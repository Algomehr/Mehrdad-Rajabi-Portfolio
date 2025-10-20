import React from 'react';
import { Link } from 'react-scroll';
import { NavItem } from './SidebarNav';

interface MobileMenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({ isOpen, onClose, navItems }) => {
    return (
        <div
            className={`fullscreen-menu ${isOpen ? 'open' : ''}`}
            onClick={onClose}
        >
            <div
                className="flex flex-col items-center justify-center h-full gap-4"
                onClick={(e) => e.stopPropagation()} 
            >
                {navItems.map((item, index) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={onClose}
                        activeClass="text-blue-400"
                        className="menu-item flex items-center gap-4 w-full justify-center p-4 text-2xl font-bold transition-colors duration-200 text-gray-300 hover:text-white cursor-pointer"
                        style={{ animationDelay: `${index * 80}ms` }}
                    >
                       <span className="w-8 h-8">{item.icon}</span>
                       <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};