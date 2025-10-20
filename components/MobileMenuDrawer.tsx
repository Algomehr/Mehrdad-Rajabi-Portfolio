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
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-slate-900/80 shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? 'transform-none' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col items-start p-6 space-y-4 mt-16">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={onClose}
                            activeClass="bg-blue-500/20 text-blue-300"
                            className="flex items-center gap-4 w-full text-left p-3 rounded-md text-lg font-semibold transition-colors duration-200 text-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer"
                        >
                           <span className="w-6 h-6">{item.icon}</span>
                           <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};