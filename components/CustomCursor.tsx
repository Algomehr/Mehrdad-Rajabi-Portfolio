import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        const handleMouseEnter = (e: MouseEvent) => {
          if ((e.target as HTMLElement).closest('a, button, [role="button"], .cursor-pointer')) {
            setIsHovering(true);
          }
        };

        const handleMouseLeave = (e: MouseEvent) => {
          if ((e.target as HTMLElement).closest('a, button, [role="button"], .cursor-pointer')) {
            setIsHovering(false);
          }
        };

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseover', handleMouseEnter);
        document.body.addEventListener('mouseout', handleMouseLeave);


        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseover', handleMouseEnter);
            document.body.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    const dotSize = isHovering ? 0 : 8;
    const outlineSize = isHovering ? 40 : 32;

    return (
        <>
            <div 
                className="fixed top-0 left-0 rounded-full bg-blue-500 pointer-events-none transition-all duration-300 ease-out z-50"
                style={{ 
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                    width: `${dotSize}px`,
                    height: `${dotSize}px`
                }}
            />
            <div 
                className="fixed top-0 left-0 rounded-full border-2 border-blue-500 pointer-events-none transition-all duration-300 ease-out z-50"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                    width: `${outlineSize}px`,
                    height: `${outlineSize}px`,
                    opacity: isHovering ? 0.5 : 1,
                }}
            />
        </>
    );
};
