import React from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface MobileHeaderProps {
    isMenuOpen: boolean;
    onToggleMenu: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ isMenuOpen, onToggleMenu }) => {
    return (
        <header className="fixed top-0 right-0 w-full h-20 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-40 flex items-center justify-between px-4">
            <h1 className="text-xl font-bold text-white">Mehrdad Rajabi</h1>
            <button
                onClick={onToggleMenu}
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </header>
    );
};
