import React from 'react';

interface MobileHeaderProps {
    isMenuOpen: boolean;
    onToggleMenu: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ isMenuOpen, onToggleMenu }) => {
    return (
        <header className="fixed top-0 right-0 w-full h-20 bg-slate-900/80 backdrop-blur-sm border-b border-gray-800 z-50 flex items-center justify-between px-4">
            <h1 className="text-xl font-bold text-white">Mehrdad Rajabi</h1>
            <button
                onClick={onToggleMenu}
                className={`hamburger-button z-50 ${isMenuOpen ? 'open' : ''}`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
            >
                <div className="line line-top"></div>
                <div className="line line-middle"></div>
                <div className="line line-bottom"></div>
            </button>
        </header>
    );
};